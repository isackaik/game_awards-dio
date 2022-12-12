package me.dio.gameawards.service.impl;

import java.util.List;
import java.util.Optional;

import me.dio.gameawards.service.expection.BusinessException;
import me.dio.gameawards.model.GameRepository;
import me.dio.gameawards.service.GameService;
import me.dio.gameawards.service.expection.NoContentException;
import me.dio.gameawards.model.Game;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;


@Service
public class GameServiceImpl implements GameService {

	@Autowired
	private GameRepository repository;
	
	@Override
	public List<Game> findAll() {
		
		List<Game> games = repository.findAll(Sort.by(Direction.DESC, "votes"));
		return games;	
	}

	@Override
	public Game findById(Long id) {
		
		Optional<Game> game = repository.findById(id);
		return game.orElseThrow(() -> new NoContentException());
	}

	@Override
	public void insert(Game game) {
		
		if (game.getId() != null) {
			throw new BusinessException("O ID precisa ser NULL na inclusão.");
		}
		repository.save(game);	
	}

	@Override
	public void update(Long id, Game game) {
		
		Game gameDb = findById(id);
		if (gameDb.getId().equals(game.getId())) {
			repository.save(game);
		} else {
			throw new BusinessException("Os IDs para alteração são divergentes.");
		}
	}

	@Override
	public void delete(Long id) {
		
		Game gameDb = findById(id);
		repository.delete(gameDb);
	}

	@Override
	public void vote(Long id) {

		Game gameDb = findById(id);
		gameDb.setVotes(gameDb.getVotes() + 1);
		
		update(id, gameDb);
		
	}

}

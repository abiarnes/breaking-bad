import Grid from '@mui/material/Grid';
import Details from './Details';
import useCharacters from '../hooks/useCharacters'
import Character from './Character';
import Spinner from './Spinner';

const List = () => {
    const { items, loading } = useCharacters();
    return loading ? <Spinner /> : (
        <div>
            <Grid
                container
                spacing={2}
            >
                {items.map(item => (
                    <Character
                        key={item.char_id}
                        item={item}
                    />
                ))}
            </Grid>
        </ div>
    )
}

export default List;
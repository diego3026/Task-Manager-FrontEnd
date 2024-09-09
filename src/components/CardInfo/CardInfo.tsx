import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardInfoProps {
    title: string;
    text: string;
}
  
const CardInfo = ({title, text }: CardInfoProps) => {
    return (
        <Card sx={{ width: 275, height:200, boxShadow:"0px 2px 18px -4px rgba(89,89,217,1)" }}>
            <CardContent sx={{display:'flex', flexDirection: 'column'}}>
                <Typography sx={{height: 85, textAlign: 'center', fontWeight: 'bold'}} variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{textAlign: 'center'}} variant="body2">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardInfo;
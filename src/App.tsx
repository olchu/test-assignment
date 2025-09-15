import { Banner } from './components/Banner/Banner';
import { Button } from './components/ui/Button';
import { GroupConteiner } from './components/ui/GroupConteiner';
import { GroupConteinerProps } from './components/ui/GroupConteiner/GroupConteiner';
import { Text } from './components/ui/Text/Text';
import './styles/globals.css';
import { useMediaQuery } from './utils/hooks/useMediaQuery';

type descGroupPropsType= Pick<GroupConteinerProps, 'direction' | 'gap'>
type actionsGroupPropsType= Pick<GroupConteinerProps, 'direction'>

function App() {
  const matches = useMediaQuery('(min-width: 600px)');

  const descGroupProps : descGroupPropsType={
    gap:matches? 40: 20,
    direction: matches? 'row': 'column'
  }
  const actionsGroupProps:actionsGroupPropsType={
    direction: matches? 'row': 'column'
  }
   
  return (
    <div>
      <Banner>
          <Text align="left" as='h2' size="lg">Get the Business Funding You Need</Text>

          <GroupConteiner {...descGroupProps} >
            <Text as='p' size="sm">Expand your business with a flexible loan tailored to your needs. Whether you're investing in new equipment, increasing inventory, or boosting cash flow, we offer quick approvals and competitive rates to keep your business growing.</Text>
            <Text as='p' size="sm">Expand your business with a flexible loan tailored to your needs. Whether you're investing in new equipment, increasing inventory, or boosting cash flow, we offer quick approvals and competitive rates to keep your business growing.</Text>

          </GroupConteiner>
          <GroupConteiner gap={20} {...actionsGroupProps}>
            <Button>Apply Now</Button>
            <a> More information</a>
          </GroupConteiner>


      </Banner>
    </div>
  );
}

export default App;

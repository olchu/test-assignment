import { useMediaQuery } from '@/utils/hooks/useMediaQuery';
import { FeatureList } from '../FeatureList';
import { Banner } from '../ui/Banner/Banner';
import { Button } from '../ui/Button';
import { ButtonGroup } from '../ui/ButtonGroup';
import { GroupСontainer } from '../ui/GroupContainer';
import { Link } from '../ui/Link';
import { Text } from '../ui/Text';
import { GroupContainerProps } from '../ui/GroupContainer/GroupContainer';
import illustration from '@/assets/coins-currency.png';
import styles from './BusinessFundingBanner.module.css';

type descGroupPropsType = Pick<GroupContainerProps, 'direction' | 'gap'>;

const featureList = [
  'Fast approval process',
  'Flexible repayment terms',
  'Competitive interest rates',
];

export const BusinessFundingBanner = () => {
  const matches = useMediaQuery('(min-width: 600px)');

  const descGroupProps: descGroupPropsType = {
    gap: matches ? 40 : 20,
    direction: matches ? 'row' : 'column',
  };
  
  return (
    <Banner>
      <Text align="left" as="h2" size="lg">
        Get the Business Funding You Need
      </Text>

      <GroupСontainer {...descGroupProps}>
        <Text as="p" size="sm">
          Expand your business with a flexible loan tailored to your needs. Whether you're investing
          in new equipment, increasing inventory, or boosting cash flow, we offer quick approvals
          and competitive rates to keep your business growing.
        </Text>
        <FeatureList items={featureList} />
      </GroupСontainer>

      <ButtonGroup>
        <Button >Apply Now</Button>
        <Link
          external
          href="https://finom.co"
          underline="hover"
          variant="default"
          size="sm"
          uppercase
        >
          More information
        </Link>
      </ButtonGroup>
      <img src={illustration} alt="" aria-hidden="true" className={styles.art}/>
    </Banner>
  );
};

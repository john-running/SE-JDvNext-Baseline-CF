import { FC } from 'react';
import { UniformSlot, ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import BaseSectionTwoColumns, { Props as BaseProps } from '../components/SectionTwoColumns';

type Props = ComponentProps<BaseProps>;

const SectionTwoColumns: FC<Props> = ({
  leftContentColumns = '6',
  rightContentColumns = '6',
  verticalAlignment,
  mobileItemsOrder,
  hasBottomBorder,
}) => (
  <BaseSectionTwoColumns
    leftContentColumns={leftContentColumns}
    rightContentColumns={rightContentColumns}
    verticalAlignment={verticalAlignment}
    mobileItemsOrder={mobileItemsOrder}
    hasBottomBorder={hasBottomBorder}
    leftContent={<UniformSlot name="leftContent" />}
    rightContent={<UniformSlot name="rightContent" />}
  />
);

registerUniformComponent({
  type: 'sectionTwoColumns',
  component: SectionTwoColumns,
});

export default SectionTwoColumns;

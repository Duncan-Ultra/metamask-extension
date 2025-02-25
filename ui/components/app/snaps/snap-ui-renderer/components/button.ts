import { ButtonElement, JSXElement } from '@metamask/snaps-sdk/jsx';
import { getJsxChildren } from '@metamask/snaps-utils';
import { NonEmptyArray } from '@metamask/utils';
import { mapTextToTemplate } from '../utils';
import { TextVariant } from '../../../../../helpers/constants/design-system';
import { UIComponentFactory } from './types';

export const button: UIComponentFactory<ButtonElement> = ({
  element,
  ...params
}) => ({
  element: 'SnapUIButton',
  props: {
    type: element.props.type,
    form: element.props.form,
    variant: element.props.variant,
    name: element.props.name,
    disabled: element.props.disabled,
    loading: element.props.loading,
    textVariant:
      element.props.size === 'sm' ? TextVariant.bodySm : TextVariant.bodyMd,
  },
  children: mapTextToTemplate(
    getJsxChildren(element) as NonEmptyArray<string | JSXElement>,
    params,
  ),
});

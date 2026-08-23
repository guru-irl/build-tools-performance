import React from 'react';
const LABEL_32822 = 'component_32822';
export function Component32822({ value = 32822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32822, 'data-value': derived.doubled }, children);
}
export default Component32822;

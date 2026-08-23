import React from 'react';
const LABEL_39641 = 'component_39641';
export function Component39641({ value = 39641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39641, 'data-value': derived.doubled }, children);
}
export default Component39641;

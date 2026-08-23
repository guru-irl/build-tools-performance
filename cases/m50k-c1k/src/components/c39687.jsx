import React from 'react';
const LABEL_39687 = 'component_39687';
export function Component39687({ value = 39687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39687, 'data-value': derived.doubled }, children);
}
export default Component39687;

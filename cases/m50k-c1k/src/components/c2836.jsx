import React from 'react';
const LABEL_2836 = 'component_2836';
export function Component2836({ value = 2836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2836, 'data-value': derived.doubled }, children);
}
export default Component2836;

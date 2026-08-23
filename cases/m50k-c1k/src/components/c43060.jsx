import React from 'react';
const LABEL_43060 = 'component_43060';
export function Component43060({ value = 43060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43060, 'data-value': derived.doubled }, children);
}
export default Component43060;

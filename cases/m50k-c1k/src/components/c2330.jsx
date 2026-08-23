import React from 'react';
const LABEL_2330 = 'component_2330';
export function Component2330({ value = 2330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2330, 'data-value': derived.doubled }, children);
}
export default Component2330;

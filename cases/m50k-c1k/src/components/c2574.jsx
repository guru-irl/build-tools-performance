import React from 'react';
const LABEL_2574 = 'component_2574';
export function Component2574({ value = 2574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2574, 'data-value': derived.doubled }, children);
}
export default Component2574;

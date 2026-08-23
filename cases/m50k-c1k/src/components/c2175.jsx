import React from 'react';
const LABEL_2175 = 'component_2175';
export function Component2175({ value = 2175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2175, 'data-value': derived.doubled }, children);
}
export default Component2175;

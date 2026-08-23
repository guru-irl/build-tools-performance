import React from 'react';
const LABEL_2063 = 'component_2063';
export function Component2063({ value = 2063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2063, 'data-value': derived.doubled }, children);
}
export default Component2063;

import React from 'react';
const LABEL_2053 = 'component_2053';
export function Component2053({ value = 2053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2053, 'data-value': derived.doubled }, children);
}
export default Component2053;

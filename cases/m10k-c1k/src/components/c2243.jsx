import React from 'react';
const LABEL_2243 = 'component_2243';
export function Component2243({ value = 2243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2243, 'data-value': derived.doubled }, children);
}
export default Component2243;

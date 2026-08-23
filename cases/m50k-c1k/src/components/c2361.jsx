import React from 'react';
const LABEL_2361 = 'component_2361';
export function Component2361({ value = 2361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2361, 'data-value': derived.doubled }, children);
}
export default Component2361;

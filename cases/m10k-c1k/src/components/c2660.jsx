import React from 'react';
const LABEL_2660 = 'component_2660';
export function Component2660({ value = 2660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2660, 'data-value': derived.doubled }, children);
}
export default Component2660;

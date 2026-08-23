import React from 'react';
const LABEL_2853 = 'component_2853';
export function Component2853({ value = 2853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2853, 'data-value': derived.doubled }, children);
}
export default Component2853;

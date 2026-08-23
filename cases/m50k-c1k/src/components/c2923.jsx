import React from 'react';
const LABEL_2923 = 'component_2923';
export function Component2923({ value = 2923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2923, 'data-value': derived.doubled }, children);
}
export default Component2923;

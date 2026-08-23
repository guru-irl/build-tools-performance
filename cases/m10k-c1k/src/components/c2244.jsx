import React from 'react';
const LABEL_2244 = 'component_2244';
export function Component2244({ value = 2244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2244, 'data-value': derived.doubled }, children);
}
export default Component2244;

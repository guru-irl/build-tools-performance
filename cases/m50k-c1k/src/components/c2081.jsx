import React from 'react';
const LABEL_2081 = 'component_2081';
export function Component2081({ value = 2081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2081, 'data-value': derived.doubled }, children);
}
export default Component2081;

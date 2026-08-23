import React from 'react';
const LABEL_2266 = 'component_2266';
export function Component2266({ value = 2266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2266, 'data-value': derived.doubled }, children);
}
export default Component2266;

import React from 'react';
const LABEL_2913 = 'component_2913';
export function Component2913({ value = 2913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2913, 'data-value': derived.doubled }, children);
}
export default Component2913;

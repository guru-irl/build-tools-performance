import React from 'react';
const LABEL_3421 = 'component_3421';
export function Component3421({ value = 3421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3421, 'data-value': derived.doubled }, children);
}
export default Component3421;

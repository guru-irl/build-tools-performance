import React from 'react';
const LABEL_5756 = 'component_5756';
export function Component5756({ value = 5756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5756, 'data-value': derived.doubled }, children);
}
export default Component5756;

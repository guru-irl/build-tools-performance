import React from 'react';
const LABEL_20888 = 'component_20888';
export function Component20888({ value = 20888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20888, 'data-value': derived.doubled }, children);
}
export default Component20888;

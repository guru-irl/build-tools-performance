import React from 'react';
const LABEL_10148 = 'component_10148';
export function Component10148({ value = 10148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10148, 'data-value': derived.doubled }, children);
}
export default Component10148;

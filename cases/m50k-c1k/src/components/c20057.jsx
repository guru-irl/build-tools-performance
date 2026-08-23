import React from 'react';
const LABEL_20057 = 'component_20057';
export function Component20057({ value = 20057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20057, 'data-value': derived.doubled }, children);
}
export default Component20057;

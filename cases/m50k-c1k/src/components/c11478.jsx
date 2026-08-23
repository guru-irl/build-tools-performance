import React from 'react';
const LABEL_11478 = 'component_11478';
export function Component11478({ value = 11478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11478, 'data-value': derived.doubled }, children);
}
export default Component11478;

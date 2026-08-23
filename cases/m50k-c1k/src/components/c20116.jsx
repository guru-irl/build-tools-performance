import React from 'react';
const LABEL_20116 = 'component_20116';
export function Component20116({ value = 20116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20116, 'data-value': derived.doubled }, children);
}
export default Component20116;

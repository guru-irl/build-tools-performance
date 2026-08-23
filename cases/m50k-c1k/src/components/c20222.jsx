import React from 'react';
const LABEL_20222 = 'component_20222';
export function Component20222({ value = 20222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20222, 'data-value': derived.doubled }, children);
}
export default Component20222;

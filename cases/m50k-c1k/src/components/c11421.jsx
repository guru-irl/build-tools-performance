import React from 'react';
const LABEL_11421 = 'component_11421';
export function Component11421({ value = 11421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11421, 'data-value': derived.doubled }, children);
}
export default Component11421;

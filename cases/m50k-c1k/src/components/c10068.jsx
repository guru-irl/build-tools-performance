import React from 'react';
const LABEL_10068 = 'component_10068';
export function Component10068({ value = 10068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10068, 'data-value': derived.doubled }, children);
}
export default Component10068;

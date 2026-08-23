import React from 'react';
const LABEL_11612 = 'component_11612';
export function Component11612({ value = 11612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11612, 'data-value': derived.doubled }, children);
}
export default Component11612;

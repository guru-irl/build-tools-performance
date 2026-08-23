import React from 'react';
const LABEL_11787 = 'component_11787';
export function Component11787({ value = 11787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11787, 'data-value': derived.doubled }, children);
}
export default Component11787;

import React from 'react';
const LABEL_15558 = 'component_15558';
export function Component15558({ value = 15558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15558, 'data-value': derived.doubled }, children);
}
export default Component15558;

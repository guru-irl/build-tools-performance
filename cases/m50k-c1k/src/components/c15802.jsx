import React from 'react';
const LABEL_15802 = 'component_15802';
export function Component15802({ value = 15802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15802, 'data-value': derived.doubled }, children);
}
export default Component15802;

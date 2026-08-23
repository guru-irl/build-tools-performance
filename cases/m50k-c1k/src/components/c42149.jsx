import React from 'react';
const LABEL_42149 = 'component_42149';
export function Component42149({ value = 42149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42149, 'data-value': derived.doubled }, children);
}
export default Component42149;

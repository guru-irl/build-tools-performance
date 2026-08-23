import React from 'react';
const LABEL_42745 = 'component_42745';
export function Component42745({ value = 42745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42745, 'data-value': derived.doubled }, children);
}
export default Component42745;

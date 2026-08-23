import React from 'react';
const LABEL_32745 = 'component_32745';
export function Component32745({ value = 32745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32745, 'data-value': derived.doubled }, children);
}
export default Component32745;

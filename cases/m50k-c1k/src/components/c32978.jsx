import React from 'react';
const LABEL_32978 = 'component_32978';
export function Component32978({ value = 32978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32978, 'data-value': derived.doubled }, children);
}
export default Component32978;

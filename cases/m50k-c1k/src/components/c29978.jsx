import React from 'react';
const LABEL_29978 = 'component_29978';
export function Component29978({ value = 29978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29978, 'data-value': derived.doubled }, children);
}
export default Component29978;

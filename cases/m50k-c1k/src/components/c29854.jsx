import React from 'react';
const LABEL_29854 = 'component_29854';
export function Component29854({ value = 29854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29854, 'data-value': derived.doubled }, children);
}
export default Component29854;

import React from 'react';
const LABEL_29393 = 'component_29393';
export function Component29393({ value = 29393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29393, 'data-value': derived.doubled }, children);
}
export default Component29393;

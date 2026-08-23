import React from 'react';
const LABEL_24262 = 'component_24262';
export function Component24262({ value = 24262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24262, 'data-value': derived.doubled }, children);
}
export default Component24262;

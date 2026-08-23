import React from 'react';
const LABEL_40389 = 'component_40389';
export function Component40389({ value = 40389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40389, 'data-value': derived.doubled }, children);
}
export default Component40389;

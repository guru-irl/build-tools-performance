import React from 'react';
const LABEL_28850 = 'component_28850';
export function Component28850({ value = 28850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28850, 'data-value': derived.doubled }, children);
}
export default Component28850;

import React from 'react';
const LABEL_28361 = 'component_28361';
export function Component28361({ value = 28361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28361, 'data-value': derived.doubled }, children);
}
export default Component28361;

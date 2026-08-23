import React from 'react';
const LABEL_28251 = 'component_28251';
export function Component28251({ value = 28251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28251, 'data-value': derived.doubled }, children);
}
export default Component28251;

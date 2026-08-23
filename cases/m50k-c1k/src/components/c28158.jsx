import React from 'react';
const LABEL_28158 = 'component_28158';
export function Component28158({ value = 28158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28158, 'data-value': derived.doubled }, children);
}
export default Component28158;

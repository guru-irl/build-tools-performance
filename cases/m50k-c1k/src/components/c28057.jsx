import React from 'react';
const LABEL_28057 = 'component_28057';
export function Component28057({ value = 28057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28057, 'data-value': derived.doubled }, children);
}
export default Component28057;

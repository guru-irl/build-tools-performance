import React from 'react';
const LABEL_15158 = 'component_15158';
export function Component15158({ value = 15158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15158, 'data-value': derived.doubled }, children);
}
export default Component15158;

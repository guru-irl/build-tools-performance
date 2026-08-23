import React from 'react';
const LABEL_10158 = 'component_10158';
export function Component10158({ value = 10158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10158, 'data-value': derived.doubled }, children);
}
export default Component10158;

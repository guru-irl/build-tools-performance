import React from 'react';
const LABEL_36158 = 'component_36158';
export function Component36158({ value = 36158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36158, 'data-value': derived.doubled }, children);
}
export default Component36158;

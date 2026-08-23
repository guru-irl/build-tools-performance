import React from 'react';
const LABEL_38597 = 'component_38597';
export function Component38597({ value = 38597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38597, 'data-value': derived.doubled }, children);
}
export default Component38597;

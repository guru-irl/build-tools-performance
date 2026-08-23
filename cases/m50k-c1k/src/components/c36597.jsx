import React from 'react';
const LABEL_36597 = 'component_36597';
export function Component36597({ value = 36597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36597, 'data-value': derived.doubled }, children);
}
export default Component36597;

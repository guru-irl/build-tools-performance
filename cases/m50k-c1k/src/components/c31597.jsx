import React from 'react';
const LABEL_31597 = 'component_31597';
export function Component31597({ value = 31597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31597, 'data-value': derived.doubled }, children);
}
export default Component31597;

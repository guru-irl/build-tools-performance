import React from 'react';
const LABEL_14597 = 'component_14597';
export function Component14597({ value = 14597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14597, 'data-value': derived.doubled }, children);
}
export default Component14597;

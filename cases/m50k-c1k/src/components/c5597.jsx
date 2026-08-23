import React from 'react';
const LABEL_5597 = 'component_5597';
export function Component5597({ value = 5597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5597, 'data-value': derived.doubled }, children);
}
export default Component5597;

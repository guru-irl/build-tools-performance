import React from 'react';
const LABEL_8597 = 'component_8597';
export function Component8597({ value = 8597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8597, 'data-value': derived.doubled }, children);
}
export default Component8597;

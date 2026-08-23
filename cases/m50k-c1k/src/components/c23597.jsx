import React from 'react';
const LABEL_23597 = 'component_23597';
export function Component23597({ value = 23597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23597, 'data-value': derived.doubled }, children);
}
export default Component23597;

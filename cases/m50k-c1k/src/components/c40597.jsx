import React from 'react';
const LABEL_40597 = 'component_40597';
export function Component40597({ value = 40597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40597, 'data-value': derived.doubled }, children);
}
export default Component40597;

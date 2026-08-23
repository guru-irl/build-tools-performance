import React from 'react';
const LABEL_7658 = 'component_7658';
export function Component7658({ value = 7658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7658, 'data-value': derived.doubled }, children);
}
export default Component7658;

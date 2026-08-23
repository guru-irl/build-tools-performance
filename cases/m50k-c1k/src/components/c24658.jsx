import React from 'react';
const LABEL_24658 = 'component_24658';
export function Component24658({ value = 24658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24658, 'data-value': derived.doubled }, children);
}
export default Component24658;

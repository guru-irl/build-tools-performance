import React from 'react';
const LABEL_28382 = 'component_28382';
export function Component28382({ value = 28382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28382, 'data-value': derived.doubled }, children);
}
export default Component28382;

import React from 'react';
const LABEL_36198 = 'component_36198';
export function Component36198({ value = 36198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36198, 'data-value': derived.doubled }, children);
}
export default Component36198;

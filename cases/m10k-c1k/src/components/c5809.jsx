import React from 'react';
const LABEL_5809 = 'component_5809';
export function Component5809({ value = 5809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5809, 'data-value': derived.doubled }, children);
}
export default Component5809;

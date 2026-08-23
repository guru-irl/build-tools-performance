import React from 'react';
const LABEL_18809 = 'component_18809';
export function Component18809({ value = 18809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18809, 'data-value': derived.doubled }, children);
}
export default Component18809;

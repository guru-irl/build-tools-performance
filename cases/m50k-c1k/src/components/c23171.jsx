import React from 'react';
const LABEL_23171 = 'component_23171';
export function Component23171({ value = 23171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23171, 'data-value': derived.doubled }, children);
}
export default Component23171;

import React from 'react';
const LABEL_8794 = 'component_8794';
export function Component8794({ value = 8794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8794, 'data-value': derived.doubled }, children);
}
export default Component8794;

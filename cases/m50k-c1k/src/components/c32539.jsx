import React from 'react';
const LABEL_32539 = 'component_32539';
export function Component32539({ value = 32539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32539, 'data-value': derived.doubled }, children);
}
export default Component32539;

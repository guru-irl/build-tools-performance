import React from 'react';
const LABEL_32296 = 'component_32296';
export function Component32296({ value = 32296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32296, 'data-value': derived.doubled }, children);
}
export default Component32296;

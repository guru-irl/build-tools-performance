import React from 'react';
const LABEL_32794 = 'component_32794';
export function Component32794({ value = 32794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32794, 'data-value': derived.doubled }, children);
}
export default Component32794;

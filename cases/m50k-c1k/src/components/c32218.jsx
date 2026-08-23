import React from 'react';
const LABEL_32218 = 'component_32218';
export function Component32218({ value = 32218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32218, 'data-value': derived.doubled }, children);
}
export default Component32218;

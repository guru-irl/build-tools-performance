import React from 'react';
const LABEL_32145 = 'component_32145';
export function Component32145({ value = 32145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32145, 'data-value': derived.doubled }, children);
}
export default Component32145;

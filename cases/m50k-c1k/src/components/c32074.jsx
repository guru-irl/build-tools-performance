import React from 'react';
const LABEL_32074 = 'component_32074';
export function Component32074({ value = 32074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32074, 'data-value': derived.doubled }, children);
}
export default Component32074;

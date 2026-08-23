import React from 'react';
const LABEL_8074 = 'component_8074';
export function Component8074({ value = 8074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8074, 'data-value': derived.doubled }, children);
}
export default Component8074;

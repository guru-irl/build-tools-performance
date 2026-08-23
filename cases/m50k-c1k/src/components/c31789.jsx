import React from 'react';
const LABEL_31789 = 'component_31789';
export function Component31789({ value = 31789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31789, 'data-value': derived.doubled }, children);
}
export default Component31789;

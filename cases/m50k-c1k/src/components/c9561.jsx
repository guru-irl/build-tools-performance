import React from 'react';
const LABEL_9561 = 'component_9561';
export function Component9561({ value = 9561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9561, 'data-value': derived.doubled }, children);
}
export default Component9561;

import React from 'react';
const LABEL_9932 = 'component_9932';
export function Component9932({ value = 9932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9932, 'data-value': derived.doubled }, children);
}
export default Component9932;

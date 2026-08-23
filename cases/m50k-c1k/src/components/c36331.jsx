import React from 'react';
const LABEL_36331 = 'component_36331';
export function Component36331({ value = 36331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36331, 'data-value': derived.doubled }, children);
}
export default Component36331;

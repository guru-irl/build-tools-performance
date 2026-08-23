import React from 'react';
const LABEL_36227 = 'component_36227';
export function Component36227({ value = 36227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36227, 'data-value': derived.doubled }, children);
}
export default Component36227;

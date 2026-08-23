import React from 'react';
const LABEL_46227 = 'component_46227';
export function Component46227({ value = 46227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46227, 'data-value': derived.doubled }, children);
}
export default Component46227;

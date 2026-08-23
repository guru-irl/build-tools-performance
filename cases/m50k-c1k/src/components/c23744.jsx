import React from 'react';
const LABEL_23744 = 'component_23744';
export function Component23744({ value = 23744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23744, 'data-value': derived.doubled }, children);
}
export default Component23744;

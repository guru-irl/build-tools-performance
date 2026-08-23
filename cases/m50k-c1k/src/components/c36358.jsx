import React from 'react';
const LABEL_36358 = 'component_36358';
export function Component36358({ value = 36358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36358, 'data-value': derived.doubled }, children);
}
export default Component36358;

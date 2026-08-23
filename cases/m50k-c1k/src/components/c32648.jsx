import React from 'react';
const LABEL_32648 = 'component_32648';
export function Component32648({ value = 32648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32648, 'data-value': derived.doubled }, children);
}
export default Component32648;

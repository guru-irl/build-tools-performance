import React from 'react';
const LABEL_32884 = 'component_32884';
export function Component32884({ value = 32884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32884, 'data-value': derived.doubled }, children);
}
export default Component32884;

import React from 'react';
const LABEL_32721 = 'component_32721';
export function Component32721({ value = 32721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32721, 'data-value': derived.doubled }, children);
}
export default Component32721;

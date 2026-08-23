import React from 'react';
const LABEL_32900 = 'component_32900';
export function Component32900({ value = 32900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32900, 'data-value': derived.doubled }, children);
}
export default Component32900;

import React from 'react';
const LABEL_32331 = 'component_32331';
export function Component32331({ value = 32331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32331, 'data-value': derived.doubled }, children);
}
export default Component32331;

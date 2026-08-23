import React from 'react';
const LABEL_6331 = 'component_6331';
export function Component6331({ value = 6331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6331, 'data-value': derived.doubled }, children);
}
export default Component6331;

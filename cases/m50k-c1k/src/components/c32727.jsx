import React from 'react';
const LABEL_32727 = 'component_32727';
export function Component32727({ value = 32727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32727, 'data-value': derived.doubled }, children);
}
export default Component32727;

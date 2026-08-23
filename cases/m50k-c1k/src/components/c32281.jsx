import React from 'react';
const LABEL_32281 = 'component_32281';
export function Component32281({ value = 32281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32281, 'data-value': derived.doubled }, children);
}
export default Component32281;

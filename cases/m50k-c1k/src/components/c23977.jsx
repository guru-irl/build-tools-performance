import React from 'react';
const LABEL_23977 = 'component_23977';
export function Component23977({ value = 23977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23977, 'data-value': derived.doubled }, children);
}
export default Component23977;

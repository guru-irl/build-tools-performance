import React from 'react';
const LABEL_23068 = 'component_23068';
export function Component23068({ value = 23068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23068, 'data-value': derived.doubled }, children);
}
export default Component23068;

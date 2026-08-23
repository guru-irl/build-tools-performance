import React from 'react';
const LABEL_16421 = 'component_16421';
export function Component16421({ value = 16421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16421, 'data-value': derived.doubled }, children);
}
export default Component16421;

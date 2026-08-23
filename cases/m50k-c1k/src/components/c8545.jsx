import React from 'react';
const LABEL_8545 = 'component_8545';
export function Component8545({ value = 8545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8545, 'data-value': derived.doubled }, children);
}
export default Component8545;

import React from 'react';
const LABEL_32103 = 'component_32103';
export function Component32103({ value = 32103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32103, 'data-value': derived.doubled }, children);
}
export default Component32103;

import React from 'react';
const LABEL_16196 = 'component_16196';
export function Component16196({ value = 16196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16196, 'data-value': derived.doubled }, children);
}
export default Component16196;

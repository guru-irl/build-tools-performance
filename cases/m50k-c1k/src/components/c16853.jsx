import React from 'react';
const LABEL_16853 = 'component_16853';
export function Component16853({ value = 16853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16853, 'data-value': derived.doubled }, children);
}
export default Component16853;

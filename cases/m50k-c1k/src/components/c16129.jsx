import React from 'react';
const LABEL_16129 = 'component_16129';
export function Component16129({ value = 16129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16129, 'data-value': derived.doubled }, children);
}
export default Component16129;

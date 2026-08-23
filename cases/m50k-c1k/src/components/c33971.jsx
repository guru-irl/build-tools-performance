import React from 'react';
const LABEL_33971 = 'component_33971';
export function Component33971({ value = 33971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33971, 'data-value': derived.doubled }, children);
}
export default Component33971;

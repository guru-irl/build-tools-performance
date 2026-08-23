import React from 'react';
const LABEL_1710 = 'component_1710';
export function Component1710({ value = 1710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1710, 'data-value': derived.doubled }, children);
}
export default Component1710;

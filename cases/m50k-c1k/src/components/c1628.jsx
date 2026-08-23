import React from 'react';
const LABEL_1628 = 'component_1628';
export function Component1628({ value = 1628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1628, 'data-value': derived.doubled }, children);
}
export default Component1628;

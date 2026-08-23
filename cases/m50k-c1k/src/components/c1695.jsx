import React from 'react';
const LABEL_1695 = 'component_1695';
export function Component1695({ value = 1695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1695, 'data-value': derived.doubled }, children);
}
export default Component1695;

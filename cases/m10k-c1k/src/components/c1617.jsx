import React from 'react';
const LABEL_1617 = 'component_1617';
export function Component1617({ value = 1617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1617, 'data-value': derived.doubled }, children);
}
export default Component1617;

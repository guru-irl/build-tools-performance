import React from 'react';
const LABEL_1718 = 'component_1718';
export function Component1718({ value = 1718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1718, 'data-value': derived.doubled }, children);
}
export default Component1718;

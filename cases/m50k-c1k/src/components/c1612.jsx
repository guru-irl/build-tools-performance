import React from 'react';
const LABEL_1612 = 'component_1612';
export function Component1612({ value = 1612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1612, 'data-value': derived.doubled }, children);
}
export default Component1612;

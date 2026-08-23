import React from 'react';
const LABEL_6612 = 'component_6612';
export function Component6612({ value = 6612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6612, 'data-value': derived.doubled }, children);
}
export default Component6612;

import React from 'react';
const LABEL_1852 = 'component_1852';
export function Component1852({ value = 1852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1852, 'data-value': derived.doubled }, children);
}
export default Component1852;

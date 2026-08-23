import React from 'react';
const LABEL_1873 = 'component_1873';
export function Component1873({ value = 1873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1873, 'data-value': derived.doubled }, children);
}
export default Component1873;

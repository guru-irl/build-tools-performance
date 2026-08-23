import React from 'react';
const LABEL_1657 = 'component_1657';
export function Component1657({ value = 1657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1657, 'data-value': derived.doubled }, children);
}
export default Component1657;

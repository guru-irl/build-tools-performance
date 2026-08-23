import React from 'react';
const LABEL_1925 = 'component_1925';
export function Component1925({ value = 1925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1925, 'data-value': derived.doubled }, children);
}
export default Component1925;

import React from 'react';
const LABEL_7789 = 'component_7789';
export function Component7789({ value = 7789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7789, 'data-value': derived.doubled }, children);
}
export default Component7789;

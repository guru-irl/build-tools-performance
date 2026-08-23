import React from 'react';
const LABEL_1880 = 'component_1880';
export function Component1880({ value = 1880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1880, 'data-value': derived.doubled }, children);
}
export default Component1880;

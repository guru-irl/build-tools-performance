import React from 'react';
const LABEL_1540 = 'component_1540';
export function Component1540({ value = 1540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1540, 'data-value': derived.doubled }, children);
}
export default Component1540;

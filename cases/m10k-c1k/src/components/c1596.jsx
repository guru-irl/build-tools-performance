import React from 'react';
const LABEL_1596 = 'component_1596';
export function Component1596({ value = 1596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1596, 'data-value': derived.doubled }, children);
}
export default Component1596;

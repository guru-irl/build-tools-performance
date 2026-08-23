import React from 'react';
const LABEL_1890 = 'component_1890';
export function Component1890({ value = 1890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1890, 'data-value': derived.doubled }, children);
}
export default Component1890;

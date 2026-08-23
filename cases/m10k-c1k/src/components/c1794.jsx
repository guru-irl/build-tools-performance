import React from 'react';
const LABEL_1794 = 'component_1794';
export function Component1794({ value = 1794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1794, 'data-value': derived.doubled }, children);
}
export default Component1794;

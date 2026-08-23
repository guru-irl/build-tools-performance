import React from 'react';
const LABEL_1813 = 'component_1813';
export function Component1813({ value = 1813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1813, 'data-value': derived.doubled }, children);
}
export default Component1813;

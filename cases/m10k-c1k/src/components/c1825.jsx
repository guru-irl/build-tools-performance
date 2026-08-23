import React from 'react';
const LABEL_1825 = 'component_1825';
export function Component1825({ value = 1825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1825, 'data-value': derived.doubled }, children);
}
export default Component1825;

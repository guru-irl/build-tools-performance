import React from 'react';
const LABEL_1771 = 'component_1771';
export function Component1771({ value = 1771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1771, 'data-value': derived.doubled }, children);
}
export default Component1771;

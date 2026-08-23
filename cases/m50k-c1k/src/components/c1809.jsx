import React from 'react';
const LABEL_1809 = 'component_1809';
export function Component1809({ value = 1809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1809, 'data-value': derived.doubled }, children);
}
export default Component1809;

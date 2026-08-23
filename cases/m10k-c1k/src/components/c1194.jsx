import React from 'react';
const LABEL_1194 = 'component_1194';
export function Component1194({ value = 1194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1194, 'data-value': derived.doubled }, children);
}
export default Component1194;

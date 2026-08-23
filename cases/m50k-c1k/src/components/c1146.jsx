import React from 'react';
const LABEL_1146 = 'component_1146';
export function Component1146({ value = 1146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1146, 'data-value': derived.doubled }, children);
}
export default Component1146;

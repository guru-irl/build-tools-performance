import React from 'react';
const LABEL_1254 = 'component_1254';
export function Component1254({ value = 1254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1254, 'data-value': derived.doubled }, children);
}
export default Component1254;

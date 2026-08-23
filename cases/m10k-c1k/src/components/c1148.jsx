import React from 'react';
const LABEL_1148 = 'component_1148';
export function Component1148({ value = 1148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1148, 'data-value': derived.doubled }, children);
}
export default Component1148;

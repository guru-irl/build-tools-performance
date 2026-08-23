import React from 'react';
const LABEL_1503 = 'component_1503';
export function Component1503({ value = 1503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1503, 'data-value': derived.doubled }, children);
}
export default Component1503;

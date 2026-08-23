import React from 'react';
const LABEL_1047 = 'component_1047';
export function Component1047({ value = 1047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1047, 'data-value': derived.doubled }, children);
}
export default Component1047;

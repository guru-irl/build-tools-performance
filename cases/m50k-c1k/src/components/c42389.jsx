import React from 'react';
const LABEL_42389 = 'component_42389';
export function Component42389({ value = 42389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42389, 'data-value': derived.doubled }, children);
}
export default Component42389;

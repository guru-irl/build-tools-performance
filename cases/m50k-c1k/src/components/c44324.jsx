import React from 'react';
const LABEL_44324 = 'component_44324';
export function Component44324({ value = 44324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44324, 'data-value': derived.doubled }, children);
}
export default Component44324;

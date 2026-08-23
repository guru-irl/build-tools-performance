import React from 'react';
const LABEL_44216 = 'component_44216';
export function Component44216({ value = 44216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44216, 'data-value': derived.doubled }, children);
}
export default Component44216;

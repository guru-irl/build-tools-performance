import React from 'react';
const LABEL_3720 = 'component_3720';
export function Component3720({ value = 3720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3720, 'data-value': derived.doubled }, children);
}
export default Component3720;

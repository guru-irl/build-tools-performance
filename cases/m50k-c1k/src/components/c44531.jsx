import React from 'react';
const LABEL_44531 = 'component_44531';
export function Component44531({ value = 44531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44531, 'data-value': derived.doubled }, children);
}
export default Component44531;

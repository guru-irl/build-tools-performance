import React from 'react';
const LABEL_44504 = 'component_44504';
export function Component44504({ value = 44504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44504, 'data-value': derived.doubled }, children);
}
export default Component44504;

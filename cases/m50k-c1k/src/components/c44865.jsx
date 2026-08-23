import React from 'react';
const LABEL_44865 = 'component_44865';
export function Component44865({ value = 44865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44865, 'data-value': derived.doubled }, children);
}
export default Component44865;

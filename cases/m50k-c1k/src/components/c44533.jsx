import React from 'react';
const LABEL_44533 = 'component_44533';
export function Component44533({ value = 44533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44533, 'data-value': derived.doubled }, children);
}
export default Component44533;

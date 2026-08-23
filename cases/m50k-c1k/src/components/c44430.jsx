import React from 'react';
const LABEL_44430 = 'component_44430';
export function Component44430({ value = 44430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44430, 'data-value': derived.doubled }, children);
}
export default Component44430;

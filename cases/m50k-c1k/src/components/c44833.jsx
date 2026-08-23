import React from 'react';
const LABEL_44833 = 'component_44833';
export function Component44833({ value = 44833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44833, 'data-value': derived.doubled }, children);
}
export default Component44833;

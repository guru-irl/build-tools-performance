import React from 'react';
const LABEL_21040 = 'component_21040';
export function Component21040({ value = 21040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21040, 'data-value': derived.doubled }, children);
}
export default Component21040;

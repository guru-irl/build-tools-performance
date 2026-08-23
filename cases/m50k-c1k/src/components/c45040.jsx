import React from 'react';
const LABEL_45040 = 'component_45040';
export function Component45040({ value = 45040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45040, 'data-value': derived.doubled }, children);
}
export default Component45040;

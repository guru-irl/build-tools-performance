import React from 'react';
const LABEL_32040 = 'component_32040';
export function Component32040({ value = 32040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32040, 'data-value': derived.doubled }, children);
}
export default Component32040;

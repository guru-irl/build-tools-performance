import React from 'react';
const LABEL_19545 = 'component_19545';
export function Component19545({ value = 19545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19545, 'data-value': derived.doubled }, children);
}
export default Component19545;

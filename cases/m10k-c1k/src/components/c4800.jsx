import React from 'react';
const LABEL_4800 = 'component_4800';
export function Component4800({ value = 4800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4800, 'data-value': derived.doubled }, children);
}
export default Component4800;

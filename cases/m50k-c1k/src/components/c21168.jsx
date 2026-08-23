import React from 'react';
const LABEL_21168 = 'component_21168';
export function Component21168({ value = 21168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21168, 'data-value': derived.doubled }, children);
}
export default Component21168;

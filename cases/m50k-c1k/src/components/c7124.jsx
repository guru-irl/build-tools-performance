import React from 'react';
const LABEL_7124 = 'component_7124';
export function Component7124({ value = 7124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7124, 'data-value': derived.doubled }, children);
}
export default Component7124;

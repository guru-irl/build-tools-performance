import React from 'react';
const LABEL_36124 = 'component_36124';
export function Component36124({ value = 36124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36124, 'data-value': derived.doubled }, children);
}
export default Component36124;

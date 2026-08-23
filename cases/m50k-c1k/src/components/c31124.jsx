import React from 'react';
const LABEL_31124 = 'component_31124';
export function Component31124({ value = 31124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31124, 'data-value': derived.doubled }, children);
}
export default Component31124;

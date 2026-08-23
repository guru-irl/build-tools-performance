import React from 'react';
const LABEL_16124 = 'component_16124';
export function Component16124({ value = 16124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16124, 'data-value': derived.doubled }, children);
}
export default Component16124;

import React from 'react';
const LABEL_28124 = 'component_28124';
export function Component28124({ value = 28124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28124, 'data-value': derived.doubled }, children);
}
export default Component28124;

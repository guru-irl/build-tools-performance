import React from 'react';
const LABEL_26124 = 'component_26124';
export function Component26124({ value = 26124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26124, 'data-value': derived.doubled }, children);
}
export default Component26124;

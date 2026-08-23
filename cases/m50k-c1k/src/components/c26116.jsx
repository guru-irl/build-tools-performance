import React from 'react';
const LABEL_26116 = 'component_26116';
export function Component26116({ value = 26116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26116, 'data-value': derived.doubled }, children);
}
export default Component26116;

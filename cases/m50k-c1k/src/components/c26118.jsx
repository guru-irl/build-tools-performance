import React from 'react';
const LABEL_26118 = 'component_26118';
export function Component26118({ value = 26118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26118, 'data-value': derived.doubled }, children);
}
export default Component26118;

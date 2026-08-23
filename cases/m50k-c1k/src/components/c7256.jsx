import React from 'react';
const LABEL_7256 = 'component_7256';
export function Component7256({ value = 7256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7256, 'data-value': derived.doubled }, children);
}
export default Component7256;

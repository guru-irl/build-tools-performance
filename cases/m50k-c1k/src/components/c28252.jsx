import React from 'react';
const LABEL_28252 = 'component_28252';
export function Component28252({ value = 28252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28252, 'data-value': derived.doubled }, children);
}
export default Component28252;

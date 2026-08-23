import React from 'react';
const LABEL_20118 = 'component_20118';
export function Component20118({ value = 20118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20118, 'data-value': derived.doubled }, children);
}
export default Component20118;

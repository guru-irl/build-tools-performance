import React from 'react';
const LABEL_24118 = 'component_24118';
export function Component24118({ value = 24118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24118, 'data-value': derived.doubled }, children);
}
export default Component24118;

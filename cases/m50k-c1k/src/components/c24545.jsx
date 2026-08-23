import React from 'react';
const LABEL_24545 = 'component_24545';
export function Component24545({ value = 24545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24545, 'data-value': derived.doubled }, children);
}
export default Component24545;

import React from 'react';
const LABEL_24552 = 'component_24552';
export function Component24552({ value = 24552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24552, 'data-value': derived.doubled }, children);
}
export default Component24552;

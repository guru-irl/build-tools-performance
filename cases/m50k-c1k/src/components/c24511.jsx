import React from 'react';
const LABEL_24511 = 'component_24511';
export function Component24511({ value = 24511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24511, 'data-value': derived.doubled }, children);
}
export default Component24511;

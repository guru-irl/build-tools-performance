import React from 'react';
const LABEL_37083 = 'component_37083';
export function Component37083({ value = 37083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37083, 'data-value': derived.doubled }, children);
}
export default Component37083;

import React from 'react';
const LABEL_6857 = 'component_6857';
export function Component6857({ value = 6857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6857, 'data-value': derived.doubled }, children);
}
export default Component6857;

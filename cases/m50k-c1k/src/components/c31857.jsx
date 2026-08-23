import React from 'react';
const LABEL_31857 = 'component_31857';
export function Component31857({ value = 31857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31857, 'data-value': derived.doubled }, children);
}
export default Component31857;

import React from 'react';
const LABEL_26857 = 'component_26857';
export function Component26857({ value = 26857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26857, 'data-value': derived.doubled }, children);
}
export default Component26857;

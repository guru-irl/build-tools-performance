import React from 'react';
const LABEL_37857 = 'component_37857';
export function Component37857({ value = 37857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37857, 'data-value': derived.doubled }, children);
}
export default Component37857;

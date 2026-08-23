import React from 'react';
const LABEL_32614 = 'component_32614';
export function Component32614({ value = 32614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32614, 'data-value': derived.doubled }, children);
}
export default Component32614;

import React from 'react';
const LABEL_8511 = 'component_8511';
export function Component8511({ value = 8511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8511, 'data-value': derived.doubled }, children);
}
export default Component8511;

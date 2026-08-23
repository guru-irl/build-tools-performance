import React from 'react';
const LABEL_36511 = 'component_36511';
export function Component36511({ value = 36511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36511, 'data-value': derived.doubled }, children);
}
export default Component36511;

import React from 'react';
const LABEL_32649 = 'component_32649';
export function Component32649({ value = 32649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32649, 'data-value': derived.doubled }, children);
}
export default Component32649;

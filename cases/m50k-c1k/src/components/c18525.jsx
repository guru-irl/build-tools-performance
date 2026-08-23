import React from 'react';
const LABEL_18525 = 'component_18525';
export function Component18525({ value = 18525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18525, 'data-value': derived.doubled }, children);
}
export default Component18525;

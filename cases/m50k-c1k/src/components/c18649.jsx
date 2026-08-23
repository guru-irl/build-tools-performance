import React from 'react';
const LABEL_18649 = 'component_18649';
export function Component18649({ value = 18649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18649, 'data-value': derived.doubled }, children);
}
export default Component18649;

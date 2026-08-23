import React from 'react';
const LABEL_8955 = 'component_8955';
export function Component8955({ value = 8955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8955, 'data-value': derived.doubled }, children);
}
export default Component8955;

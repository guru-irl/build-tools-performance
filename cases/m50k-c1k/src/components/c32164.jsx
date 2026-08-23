import React from 'react';
const LABEL_32164 = 'component_32164';
export function Component32164({ value = 32164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32164, 'data-value': derived.doubled }, children);
}
export default Component32164;

import React from 'react';
const LABEL_164 = 'component_164';
export function Component164({ value = 164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_164, 'data-value': derived.doubled }, children);
}
export default Component164;

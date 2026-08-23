import React from 'react';
const LABEL_32087 = 'component_32087';
export function Component32087({ value = 32087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32087, 'data-value': derived.doubled }, children);
}
export default Component32087;

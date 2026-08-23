import React from 'react';
const LABEL_24087 = 'component_24087';
export function Component24087({ value = 24087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24087, 'data-value': derived.doubled }, children);
}
export default Component24087;

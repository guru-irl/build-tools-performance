import React from 'react';
const LABEL_35087 = 'component_35087';
export function Component35087({ value = 35087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35087, 'data-value': derived.doubled }, children);
}
export default Component35087;

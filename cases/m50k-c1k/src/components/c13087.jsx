import React from 'react';
const LABEL_13087 = 'component_13087';
export function Component13087({ value = 13087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13087, 'data-value': derived.doubled }, children);
}
export default Component13087;

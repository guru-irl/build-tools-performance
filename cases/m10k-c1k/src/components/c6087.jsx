import React from 'react';
const LABEL_6087 = 'component_6087';
export function Component6087({ value = 6087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6087, 'data-value': derived.doubled }, children);
}
export default Component6087;

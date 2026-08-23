import React from 'react';
const LABEL_38087 = 'component_38087';
export function Component38087({ value = 38087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38087, 'data-value': derived.doubled }, children);
}
export default Component38087;

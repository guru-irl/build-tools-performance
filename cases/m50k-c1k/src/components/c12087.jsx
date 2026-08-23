import React from 'react';
const LABEL_12087 = 'component_12087';
export function Component12087({ value = 12087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12087, 'data-value': derived.doubled }, children);
}
export default Component12087;

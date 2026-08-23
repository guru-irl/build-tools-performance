import React from 'react';
const LABEL_29087 = 'component_29087';
export function Component29087({ value = 29087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29087, 'data-value': derived.doubled }, children);
}
export default Component29087;

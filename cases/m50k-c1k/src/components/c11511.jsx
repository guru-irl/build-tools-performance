import React from 'react';
const LABEL_11511 = 'component_11511';
export function Component11511({ value = 11511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11511, 'data-value': derived.doubled }, children);
}
export default Component11511;

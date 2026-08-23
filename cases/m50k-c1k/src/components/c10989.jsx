import React from 'react';
const LABEL_10989 = 'component_10989';
export function Component10989({ value = 10989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10989, 'data-value': derived.doubled }, children);
}
export default Component10989;

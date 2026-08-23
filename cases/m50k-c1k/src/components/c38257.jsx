import React from 'react';
const LABEL_38257 = 'component_38257';
export function Component38257({ value = 38257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38257, 'data-value': derived.doubled }, children);
}
export default Component38257;

import React from 'react';
const LABEL_45800 = 'component_45800';
export function Component45800({ value = 45800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45800, 'data-value': derived.doubled }, children);
}
export default Component45800;

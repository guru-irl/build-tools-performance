import React from 'react';
const LABEL_30800 = 'component_30800';
export function Component30800({ value = 30800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30800, 'data-value': derived.doubled }, children);
}
export default Component30800;

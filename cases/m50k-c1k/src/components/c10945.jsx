import React from 'react';
const LABEL_10945 = 'component_10945';
export function Component10945({ value = 10945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10945, 'data-value': derived.doubled }, children);
}
export default Component10945;

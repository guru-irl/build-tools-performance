import React from 'react';
const LABEL_46800 = 'component_46800';
export function Component46800({ value = 46800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46800, 'data-value': derived.doubled }, children);
}
export default Component46800;

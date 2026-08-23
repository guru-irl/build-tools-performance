import React from 'react';
const LABEL_11750 = 'component_11750';
export function Component11750({ value = 11750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11750, 'data-value': derived.doubled }, children);
}
export default Component11750;

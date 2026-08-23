import React from 'react';
const LABEL_10873 = 'component_10873';
export function Component10873({ value = 10873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10873, 'data-value': derived.doubled }, children);
}
export default Component10873;

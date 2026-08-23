import React from 'react';
const LABEL_22868 = 'component_22868';
export function Component22868({ value = 22868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22868, 'data-value': derived.doubled }, children);
}
export default Component22868;

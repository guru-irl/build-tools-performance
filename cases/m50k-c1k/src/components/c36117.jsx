import React from 'react';
const LABEL_36117 = 'component_36117';
export function Component36117({ value = 36117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36117, 'data-value': derived.doubled }, children);
}
export default Component36117;

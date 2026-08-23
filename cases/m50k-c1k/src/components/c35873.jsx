import React from 'react';
const LABEL_35873 = 'component_35873';
export function Component35873({ value = 35873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35873, 'data-value': derived.doubled }, children);
}
export default Component35873;

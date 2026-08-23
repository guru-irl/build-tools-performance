import React from 'react';
const LABEL_28873 = 'component_28873';
export function Component28873({ value = 28873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28873, 'data-value': derived.doubled }, children);
}
export default Component28873;

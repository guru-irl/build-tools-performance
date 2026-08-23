import React from 'react';
const LABEL_14338 = 'component_14338';
export function Component14338({ value = 14338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14338, 'data-value': derived.doubled }, children);
}
export default Component14338;

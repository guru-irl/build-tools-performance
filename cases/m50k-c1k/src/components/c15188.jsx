import React from 'react';
const LABEL_15188 = 'component_15188';
export function Component15188({ value = 15188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15188, 'data-value': derived.doubled }, children);
}
export default Component15188;

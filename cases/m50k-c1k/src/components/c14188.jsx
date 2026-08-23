import React from 'react';
const LABEL_14188 = 'component_14188';
export function Component14188({ value = 14188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14188, 'data-value': derived.doubled }, children);
}
export default Component14188;

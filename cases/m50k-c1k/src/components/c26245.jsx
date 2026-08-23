import React from 'react';
const LABEL_26245 = 'component_26245';
export function Component26245({ value = 26245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26245, 'data-value': derived.doubled }, children);
}
export default Component26245;

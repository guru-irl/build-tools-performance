import React from 'react';
const LABEL_18293 = 'component_18293';
export function Component18293({ value = 18293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18293, 'data-value': derived.doubled }, children);
}
export default Component18293;

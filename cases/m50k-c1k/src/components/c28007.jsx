import React from 'react';
const LABEL_28007 = 'component_28007';
export function Component28007({ value = 28007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28007, 'data-value': derived.doubled }, children);
}
export default Component28007;

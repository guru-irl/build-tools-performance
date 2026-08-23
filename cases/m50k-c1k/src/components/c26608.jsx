import React from 'react';
const LABEL_26608 = 'component_26608';
export function Component26608({ value = 26608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26608, 'data-value': derived.doubled }, children);
}
export default Component26608;

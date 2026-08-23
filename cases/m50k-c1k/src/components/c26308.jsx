import React from 'react';
const LABEL_26308 = 'component_26308';
export function Component26308({ value = 26308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26308, 'data-value': derived.doubled }, children);
}
export default Component26308;

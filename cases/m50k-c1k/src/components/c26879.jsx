import React from 'react';
const LABEL_26879 = 'component_26879';
export function Component26879({ value = 26879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26879, 'data-value': derived.doubled }, children);
}
export default Component26879;

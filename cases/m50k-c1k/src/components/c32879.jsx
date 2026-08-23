import React from 'react';
const LABEL_32879 = 'component_32879';
export function Component32879({ value = 32879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32879, 'data-value': derived.doubled }, children);
}
export default Component32879;

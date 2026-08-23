import React from 'react';
const LABEL_5879 = 'component_5879';
export function Component5879({ value = 5879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5879, 'data-value': derived.doubled }, children);
}
export default Component5879;

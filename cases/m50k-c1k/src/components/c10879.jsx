import React from 'react';
const LABEL_10879 = 'component_10879';
export function Component10879({ value = 10879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10879, 'data-value': derived.doubled }, children);
}
export default Component10879;

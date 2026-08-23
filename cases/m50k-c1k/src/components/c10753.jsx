import React from 'react';
const LABEL_10753 = 'component_10753';
export function Component10753({ value = 10753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10753, 'data-value': derived.doubled }, children);
}
export default Component10753;

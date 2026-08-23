import React from 'react';
const LABEL_10470 = 'component_10470';
export function Component10470({ value = 10470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10470, 'data-value': derived.doubled }, children);
}
export default Component10470;

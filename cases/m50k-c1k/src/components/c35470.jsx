import React from 'react';
const LABEL_35470 = 'component_35470';
export function Component35470({ value = 35470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35470, 'data-value': derived.doubled }, children);
}
export default Component35470;

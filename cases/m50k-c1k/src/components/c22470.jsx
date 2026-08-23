import React from 'react';
const LABEL_22470 = 'component_22470';
export function Component22470({ value = 22470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22470, 'data-value': derived.doubled }, children);
}
export default Component22470;

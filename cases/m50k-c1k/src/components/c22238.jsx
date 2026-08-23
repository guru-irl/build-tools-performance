import React from 'react';
const LABEL_22238 = 'component_22238';
export function Component22238({ value = 22238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22238, 'data-value': derived.doubled }, children);
}
export default Component22238;

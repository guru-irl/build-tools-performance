import React from 'react';
const LABEL_22558 = 'component_22558';
export function Component22558({ value = 22558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22558, 'data-value': derived.doubled }, children);
}
export default Component22558;

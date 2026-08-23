import React from 'react';
const LABEL_22997 = 'component_22997';
export function Component22997({ value = 22997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22997, 'data-value': derived.doubled }, children);
}
export default Component22997;

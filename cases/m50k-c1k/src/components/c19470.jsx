import React from 'react';
const LABEL_19470 = 'component_19470';
export function Component19470({ value = 19470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19470, 'data-value': derived.doubled }, children);
}
export default Component19470;

import React from 'react';
const LABEL_19521 = 'component_19521';
export function Component19521({ value = 19521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19521, 'data-value': derived.doubled }, children);
}
export default Component19521;

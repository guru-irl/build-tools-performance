import React from 'react';
const LABEL_19197 = 'component_19197';
export function Component19197({ value = 19197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19197, 'data-value': derived.doubled }, children);
}
export default Component19197;

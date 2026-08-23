import React from 'react';
const LABEL_19053 = 'component_19053';
export function Component19053({ value = 19053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19053, 'data-value': derived.doubled }, children);
}
export default Component19053;

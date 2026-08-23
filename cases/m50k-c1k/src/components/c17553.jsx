import React from 'react';
const LABEL_17553 = 'component_17553';
export function Component17553({ value = 17553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17553, 'data-value': derived.doubled }, children);
}
export default Component17553;

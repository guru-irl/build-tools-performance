import React from 'react';
const LABEL_32450 = 'component_32450';
export function Component32450({ value = 32450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32450, 'data-value': derived.doubled }, children);
}
export default Component32450;

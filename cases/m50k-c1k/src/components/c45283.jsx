import React from 'react';
const LABEL_45283 = 'component_45283';
export function Component45283({ value = 45283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45283, 'data-value': derived.doubled }, children);
}
export default Component45283;

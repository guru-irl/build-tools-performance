import React from 'react';
const LABEL_38283 = 'component_38283';
export function Component38283({ value = 38283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38283, 'data-value': derived.doubled }, children);
}
export default Component38283;

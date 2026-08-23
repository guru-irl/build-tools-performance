import React from 'react';
const LABEL_38391 = 'component_38391';
export function Component38391({ value = 38391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38391, 'data-value': derived.doubled }, children);
}
export default Component38391;

import React from 'react';
const LABEL_11391 = 'component_11391';
export function Component11391({ value = 11391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11391, 'data-value': derived.doubled }, children);
}
export default Component11391;

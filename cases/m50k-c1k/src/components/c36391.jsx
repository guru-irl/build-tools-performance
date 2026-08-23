import React from 'react';
const LABEL_36391 = 'component_36391';
export function Component36391({ value = 36391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36391, 'data-value': derived.doubled }, children);
}
export default Component36391;

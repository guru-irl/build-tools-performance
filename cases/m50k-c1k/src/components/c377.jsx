import React from 'react';
const LABEL_377 = 'component_377';
export function Component377({ value = 377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_377, 'data-value': derived.doubled }, children);
}
export default Component377;

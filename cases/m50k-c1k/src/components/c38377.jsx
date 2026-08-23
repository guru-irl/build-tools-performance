import React from 'react';
const LABEL_38377 = 'component_38377';
export function Component38377({ value = 38377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38377, 'data-value': derived.doubled }, children);
}
export default Component38377;

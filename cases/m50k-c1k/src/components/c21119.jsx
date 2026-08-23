import React from 'react';
const LABEL_21119 = 'component_21119';
export function Component21119({ value = 21119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21119, 'data-value': derived.doubled }, children);
}
export default Component21119;

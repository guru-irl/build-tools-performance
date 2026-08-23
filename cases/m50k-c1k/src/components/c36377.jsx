import React from 'react';
const LABEL_36377 = 'component_36377';
export function Component36377({ value = 36377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36377, 'data-value': derived.doubled }, children);
}
export default Component36377;

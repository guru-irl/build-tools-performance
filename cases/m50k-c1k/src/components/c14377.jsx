import React from 'react';
const LABEL_14377 = 'component_14377';
export function Component14377({ value = 14377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14377, 'data-value': derived.doubled }, children);
}
export default Component14377;

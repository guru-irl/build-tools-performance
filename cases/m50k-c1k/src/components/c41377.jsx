import React from 'react';
const LABEL_41377 = 'component_41377';
export function Component41377({ value = 41377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41377, 'data-value': derived.doubled }, children);
}
export default Component41377;

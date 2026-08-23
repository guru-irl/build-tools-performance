import React from 'react';
const LABEL_42277 = 'component_42277';
export function Component42277({ value = 42277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42277, 'data-value': derived.doubled }, children);
}
export default Component42277;

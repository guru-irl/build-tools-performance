import React from 'react';
const LABEL_42694 = 'component_42694';
export function Component42694({ value = 42694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42694, 'data-value': derived.doubled }, children);
}
export default Component42694;

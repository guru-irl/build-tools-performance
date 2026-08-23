import React from 'react';
const LABEL_41694 = 'component_41694';
export function Component41694({ value = 41694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41694, 'data-value': derived.doubled }, children);
}
export default Component41694;

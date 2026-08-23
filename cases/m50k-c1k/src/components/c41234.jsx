import React from 'react';
const LABEL_41234 = 'component_41234';
export function Component41234({ value = 41234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41234, 'data-value': derived.doubled }, children);
}
export default Component41234;

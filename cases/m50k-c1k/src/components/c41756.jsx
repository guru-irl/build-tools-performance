import React from 'react';
const LABEL_41756 = 'component_41756';
export function Component41756({ value = 41756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41756, 'data-value': derived.doubled }, children);
}
export default Component41756;

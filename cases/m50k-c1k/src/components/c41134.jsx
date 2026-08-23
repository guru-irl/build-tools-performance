import React from 'react';
const LABEL_41134 = 'component_41134';
export function Component41134({ value = 41134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41134, 'data-value': derived.doubled }, children);
}
export default Component41134;

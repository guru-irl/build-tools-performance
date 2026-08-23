import React from 'react';
const LABEL_41004 = 'component_41004';
export function Component41004({ value = 41004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41004, 'data-value': derived.doubled }, children);
}
export default Component41004;

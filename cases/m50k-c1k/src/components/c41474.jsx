import React from 'react';
const LABEL_41474 = 'component_41474';
export function Component41474({ value = 41474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41474, 'data-value': derived.doubled }, children);
}
export default Component41474;

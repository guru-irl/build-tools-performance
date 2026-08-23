import React from 'react';
const LABEL_8564 = 'component_8564';
export function Component8564({ value = 8564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8564, 'data-value': derived.doubled }, children);
}
export default Component8564;

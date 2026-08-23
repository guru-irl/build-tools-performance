import React from 'react';
const LABEL_42437 = 'component_42437';
export function Component42437({ value = 42437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42437, 'data-value': derived.doubled }, children);
}
export default Component42437;

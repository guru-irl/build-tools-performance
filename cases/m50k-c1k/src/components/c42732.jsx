import React from 'react';
const LABEL_42732 = 'component_42732';
export function Component42732({ value = 42732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42732, 'data-value': derived.doubled }, children);
}
export default Component42732;

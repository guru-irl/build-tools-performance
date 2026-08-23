import React from 'react';
const LABEL_42010 = 'component_42010';
export function Component42010({ value = 42010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42010, 'data-value': derived.doubled }, children);
}
export default Component42010;

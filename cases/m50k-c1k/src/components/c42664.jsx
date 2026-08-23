import React from 'react';
const LABEL_42664 = 'component_42664';
export function Component42664({ value = 42664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42664, 'data-value': derived.doubled }, children);
}
export default Component42664;

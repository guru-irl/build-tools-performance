import React from 'react';
const LABEL_42545 = 'component_42545';
export function Component42545({ value = 42545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42545, 'data-value': derived.doubled }, children);
}
export default Component42545;

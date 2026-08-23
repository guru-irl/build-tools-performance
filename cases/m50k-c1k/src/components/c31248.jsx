import React from 'react';
const LABEL_31248 = 'component_31248';
export function Component31248({ value = 31248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31248, 'data-value': derived.doubled }, children);
}
export default Component31248;

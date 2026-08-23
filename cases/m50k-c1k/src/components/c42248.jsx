import React from 'react';
const LABEL_42248 = 'component_42248';
export function Component42248({ value = 42248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42248, 'data-value': derived.doubled }, children);
}
export default Component42248;

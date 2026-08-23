import React from 'react';
const LABEL_37248 = 'component_37248';
export function Component37248({ value = 37248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37248, 'data-value': derived.doubled }, children);
}
export default Component37248;

import React from 'react';
const LABEL_28248 = 'component_28248';
export function Component28248({ value = 28248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28248, 'data-value': derived.doubled }, children);
}
export default Component28248;

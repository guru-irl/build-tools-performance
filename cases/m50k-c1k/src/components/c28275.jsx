import React from 'react';
const LABEL_28275 = 'component_28275';
export function Component28275({ value = 28275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28275, 'data-value': derived.doubled }, children);
}
export default Component28275;

import React from 'react';
const LABEL_148 = 'component_148';
export function Component148({ value = 148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_148, 'data-value': derived.doubled }, children);
}
export default Component148;

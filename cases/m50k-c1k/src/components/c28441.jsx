import React from 'react';
const LABEL_28441 = 'component_28441';
export function Component28441({ value = 28441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28441, 'data-value': derived.doubled }, children);
}
export default Component28441;

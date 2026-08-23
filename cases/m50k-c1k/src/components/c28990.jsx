import React from 'react';
const LABEL_28990 = 'component_28990';
export function Component28990({ value = 28990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28990, 'data-value': derived.doubled }, children);
}
export default Component28990;

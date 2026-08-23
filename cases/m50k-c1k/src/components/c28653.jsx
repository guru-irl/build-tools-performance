import React from 'react';
const LABEL_28653 = 'component_28653';
export function Component28653({ value = 28653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28653, 'data-value': derived.doubled }, children);
}
export default Component28653;

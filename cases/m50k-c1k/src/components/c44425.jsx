import React from 'react';
const LABEL_44425 = 'component_44425';
export function Component44425({ value = 44425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44425, 'data-value': derived.doubled }, children);
}
export default Component44425;

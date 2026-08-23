import React from 'react';
const LABEL_8813 = 'component_8813';
export function Component8813({ value = 8813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8813, 'data-value': derived.doubled }, children);
}
export default Component8813;

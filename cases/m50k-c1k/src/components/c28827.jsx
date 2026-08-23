import React from 'react';
const LABEL_28827 = 'component_28827';
export function Component28827({ value = 28827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28827, 'data-value': derived.doubled }, children);
}
export default Component28827;

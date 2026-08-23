import React from 'react';
const LABEL_28130 = 'component_28130';
export function Component28130({ value = 28130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28130, 'data-value': derived.doubled }, children);
}
export default Component28130;

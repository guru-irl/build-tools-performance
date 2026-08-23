import React from 'react';
const LABEL_36130 = 'component_36130';
export function Component36130({ value = 36130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36130, 'data-value': derived.doubled }, children);
}
export default Component36130;

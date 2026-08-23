import React from 'react';
const LABEL_41751 = 'component_41751';
export function Component41751({ value = 41751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41751, 'data-value': derived.doubled }, children);
}
export default Component41751;

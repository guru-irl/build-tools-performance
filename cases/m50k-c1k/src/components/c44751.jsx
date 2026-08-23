import React from 'react';
const LABEL_44751 = 'component_44751';
export function Component44751({ value = 44751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44751, 'data-value': derived.doubled }, children);
}
export default Component44751;

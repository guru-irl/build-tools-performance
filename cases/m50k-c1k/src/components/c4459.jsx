import React from 'react';
const LABEL_4459 = 'component_4459';
export function Component4459({ value = 4459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4459, 'data-value': derived.doubled }, children);
}
export default Component4459;

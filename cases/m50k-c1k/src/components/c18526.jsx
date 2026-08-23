import React from 'react';
const LABEL_18526 = 'component_18526';
export function Component18526({ value = 18526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18526, 'data-value': derived.doubled }, children);
}
export default Component18526;

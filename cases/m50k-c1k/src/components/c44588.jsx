import React from 'react';
const LABEL_44588 = 'component_44588';
export function Component44588({ value = 44588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44588, 'data-value': derived.doubled }, children);
}
export default Component44588;

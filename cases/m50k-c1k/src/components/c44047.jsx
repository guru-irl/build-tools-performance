import React from 'react';
const LABEL_44047 = 'component_44047';
export function Component44047({ value = 44047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44047, 'data-value': derived.doubled }, children);
}
export default Component44047;

import React from 'react';
const LABEL_46047 = 'component_46047';
export function Component46047({ value = 46047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46047, 'data-value': derived.doubled }, children);
}
export default Component46047;

import React from 'react';
const LABEL_38047 = 'component_38047';
export function Component38047({ value = 38047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38047, 'data-value': derived.doubled }, children);
}
export default Component38047;

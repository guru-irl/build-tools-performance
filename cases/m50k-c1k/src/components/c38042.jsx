import React from 'react';
const LABEL_38042 = 'component_38042';
export function Component38042({ value = 38042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38042, 'data-value': derived.doubled }, children);
}
export default Component38042;

import React from 'react';
const LABEL_25965 = 'component_25965';
export function Component25965({ value = 25965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25965, 'data-value': derived.doubled }, children);
}
export default Component25965;

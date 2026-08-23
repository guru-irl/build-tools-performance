import React from 'react';
const LABEL_29965 = 'component_29965';
export function Component29965({ value = 29965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29965, 'data-value': derived.doubled }, children);
}
export default Component29965;

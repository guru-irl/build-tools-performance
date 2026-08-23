import React from 'react';
const LABEL_6965 = 'component_6965';
export function Component6965({ value = 6965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6965, 'data-value': derived.doubled }, children);
}
export default Component6965;

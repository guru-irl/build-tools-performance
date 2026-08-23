import React from 'react';
const LABEL_38827 = 'component_38827';
export function Component38827({ value = 38827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38827, 'data-value': derived.doubled }, children);
}
export default Component38827;

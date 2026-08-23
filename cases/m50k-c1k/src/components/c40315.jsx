import React from 'react';
const LABEL_40315 = 'component_40315';
export function Component40315({ value = 40315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40315, 'data-value': derived.doubled }, children);
}
export default Component40315;

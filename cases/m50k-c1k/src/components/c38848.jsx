import React from 'react';
const LABEL_38848 = 'component_38848';
export function Component38848({ value = 38848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38848, 'data-value': derived.doubled }, children);
}
export default Component38848;

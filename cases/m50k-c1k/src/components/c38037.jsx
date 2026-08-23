import React from 'react';
const LABEL_38037 = 'component_38037';
export function Component38037({ value = 38037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38037, 'data-value': derived.doubled }, children);
}
export default Component38037;

import React from 'react';
const LABEL_25250 = 'component_25250';
export function Component25250({ value = 25250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25250, 'data-value': derived.doubled }, children);
}
export default Component25250;

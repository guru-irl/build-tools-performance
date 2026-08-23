import React from 'react';
const LABEL_25388 = 'component_25388';
export function Component25388({ value = 25388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25388, 'data-value': derived.doubled }, children);
}
export default Component25388;

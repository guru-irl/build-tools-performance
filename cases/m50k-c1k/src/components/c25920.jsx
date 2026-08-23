import React from 'react';
const LABEL_25920 = 'component_25920';
export function Component25920({ value = 25920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25920, 'data-value': derived.doubled }, children);
}
export default Component25920;

import React from 'react';
const LABEL_25708 = 'component_25708';
export function Component25708({ value = 25708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25708, 'data-value': derived.doubled }, children);
}
export default Component25708;

import React from 'react';
const LABEL_16708 = 'component_16708';
export function Component16708({ value = 16708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16708, 'data-value': derived.doubled }, children);
}
export default Component16708;

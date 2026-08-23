import React from 'react';
const LABEL_10654 = 'component_10654';
export function Component10654({ value = 10654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10654, 'data-value': derived.doubled }, children);
}
export default Component10654;

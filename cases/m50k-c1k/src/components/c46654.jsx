import React from 'react';
const LABEL_46654 = 'component_46654';
export function Component46654({ value = 46654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46654, 'data-value': derived.doubled }, children);
}
export default Component46654;

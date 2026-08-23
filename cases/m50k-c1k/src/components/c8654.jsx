import React from 'react';
const LABEL_8654 = 'component_8654';
export function Component8654({ value = 8654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8654, 'data-value': derived.doubled }, children);
}
export default Component8654;

import React from 'react';
const LABEL_18654 = 'component_18654';
export function Component18654({ value = 18654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18654, 'data-value': derived.doubled }, children);
}
export default Component18654;

import React from 'react';
const LABEL_44654 = 'component_44654';
export function Component44654({ value = 44654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44654, 'data-value': derived.doubled }, children);
}
export default Component44654;

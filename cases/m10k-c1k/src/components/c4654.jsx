import React from 'react';
const LABEL_4654 = 'component_4654';
export function Component4654({ value = 4654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4654, 'data-value': derived.doubled }, children);
}
export default Component4654;

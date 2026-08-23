import React from 'react';
const LABEL_14654 = 'component_14654';
export function Component14654({ value = 14654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14654, 'data-value': derived.doubled }, children);
}
export default Component14654;

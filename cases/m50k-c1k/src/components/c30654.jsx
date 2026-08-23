import React from 'react';
const LABEL_30654 = 'component_30654';
export function Component30654({ value = 30654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30654, 'data-value': derived.doubled }, children);
}
export default Component30654;

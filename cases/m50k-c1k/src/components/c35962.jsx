import React from 'react';
const LABEL_35962 = 'component_35962';
export function Component35962({ value = 35962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35962, 'data-value': derived.doubled }, children);
}
export default Component35962;

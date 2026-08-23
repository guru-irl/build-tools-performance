import React from 'react';
const LABEL_31962 = 'component_31962';
export function Component31962({ value = 31962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31962, 'data-value': derived.doubled }, children);
}
export default Component31962;

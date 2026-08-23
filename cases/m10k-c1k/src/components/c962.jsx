import React from 'react';
const LABEL_962 = 'component_962';
export function Component962({ value = 962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_962, 'data-value': derived.doubled }, children);
}
export default Component962;

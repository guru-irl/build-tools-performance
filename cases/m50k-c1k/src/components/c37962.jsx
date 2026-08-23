import React from 'react';
const LABEL_37962 = 'component_37962';
export function Component37962({ value = 37962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37962, 'data-value': derived.doubled }, children);
}
export default Component37962;

import React from 'react';
const LABEL_32962 = 'component_32962';
export function Component32962({ value = 32962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32962, 'data-value': derived.doubled }, children);
}
export default Component32962;

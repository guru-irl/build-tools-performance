import React from 'react';
const LABEL_45962 = 'component_45962';
export function Component45962({ value = 45962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45962, 'data-value': derived.doubled }, children);
}
export default Component45962;

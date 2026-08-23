import React from 'react';
const LABEL_35398 = 'component_35398';
export function Component35398({ value = 35398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35398, 'data-value': derived.doubled }, children);
}
export default Component35398;

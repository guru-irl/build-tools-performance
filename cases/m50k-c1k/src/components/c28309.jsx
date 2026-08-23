import React from 'react';
const LABEL_28309 = 'component_28309';
export function Component28309({ value = 28309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28309, 'data-value': derived.doubled }, children);
}
export default Component28309;

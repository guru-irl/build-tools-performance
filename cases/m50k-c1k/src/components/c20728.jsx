import React from 'react';
const LABEL_20728 = 'component_20728';
export function Component20728({ value = 20728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20728, 'data-value': derived.doubled }, children);
}
export default Component20728;

import React from 'react';
const LABEL_28960 = 'component_28960';
export function Component28960({ value = 28960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28960, 'data-value': derived.doubled }, children);
}
export default Component28960;

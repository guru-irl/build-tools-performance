import React from 'react';
const LABEL_22728 = 'component_22728';
export function Component22728({ value = 22728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22728, 'data-value': derived.doubled }, children);
}
export default Component22728;

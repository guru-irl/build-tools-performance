import React from 'react';
const LABEL_45290 = 'component_45290';
export function Component45290({ value = 45290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45290, 'data-value': derived.doubled }, children);
}
export default Component45290;

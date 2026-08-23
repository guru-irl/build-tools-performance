import React from 'react';
const LABEL_28250 = 'component_28250';
export function Component28250({ value = 28250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28250, 'data-value': derived.doubled }, children);
}
export default Component28250;

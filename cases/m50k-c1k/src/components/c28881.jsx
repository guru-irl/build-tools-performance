import React from 'react';
const LABEL_28881 = 'component_28881';
export function Component28881({ value = 28881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28881, 'data-value': derived.doubled }, children);
}
export default Component28881;

import React from 'react';
const LABEL_42881 = 'component_42881';
export function Component42881({ value = 42881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42881, 'data-value': derived.doubled }, children);
}
export default Component42881;

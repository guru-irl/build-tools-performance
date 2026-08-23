import React from 'react';
const LABEL_3339 = 'component_3339';
export function Component3339({ value = 3339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3339, 'data-value': derived.doubled }, children);
}
export default Component3339;

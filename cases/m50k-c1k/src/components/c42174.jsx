import React from 'react';
const LABEL_42174 = 'component_42174';
export function Component42174({ value = 42174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42174, 'data-value': derived.doubled }, children);
}
export default Component42174;

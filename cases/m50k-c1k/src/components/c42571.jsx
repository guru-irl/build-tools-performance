import React from 'react';
const LABEL_42571 = 'component_42571';
export function Component42571({ value = 42571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42571, 'data-value': derived.doubled }, children);
}
export default Component42571;

import React from 'react';
const LABEL_10609 = 'component_10609';
export function Component10609({ value = 10609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10609, 'data-value': derived.doubled }, children);
}
export default Component10609;

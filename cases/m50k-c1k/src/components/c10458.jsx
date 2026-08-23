import React from 'react';
const LABEL_10458 = 'component_10458';
export function Component10458({ value = 10458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10458, 'data-value': derived.doubled }, children);
}
export default Component10458;

import React from 'react';
const LABEL_10084 = 'component_10084';
export function Component10084({ value = 10084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10084, 'data-value': derived.doubled }, children);
}
export default Component10084;

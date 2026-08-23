import React from 'react';
const LABEL_15084 = 'component_15084';
export function Component15084({ value = 15084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15084, 'data-value': derived.doubled }, children);
}
export default Component15084;

import React from 'react';
const LABEL_628 = 'component_628';
export function Component628({ value = 628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_628, 'data-value': derived.doubled }, children);
}
export default Component628;

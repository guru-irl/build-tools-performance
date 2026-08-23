import React from 'react';
const LABEL_12694 = 'component_12694';
export function Component12694({ value = 12694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12694, 'data-value': derived.doubled }, children);
}
export default Component12694;

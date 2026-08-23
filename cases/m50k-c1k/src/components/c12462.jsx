import React from 'react';
const LABEL_12462 = 'component_12462';
export function Component12462({ value = 12462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12462, 'data-value': derived.doubled }, children);
}
export default Component12462;

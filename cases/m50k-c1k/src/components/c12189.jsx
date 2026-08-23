import React from 'react';
const LABEL_12189 = 'component_12189';
export function Component12189({ value = 12189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12189, 'data-value': derived.doubled }, children);
}
export default Component12189;

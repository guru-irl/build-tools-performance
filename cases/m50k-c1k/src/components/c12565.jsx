import React from 'react';
const LABEL_12565 = 'component_12565';
export function Component12565({ value = 12565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12565, 'data-value': derived.doubled }, children);
}
export default Component12565;

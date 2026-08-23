import React from 'react';
const LABEL_12667 = 'component_12667';
export function Component12667({ value = 12667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12667, 'data-value': derived.doubled }, children);
}
export default Component12667;

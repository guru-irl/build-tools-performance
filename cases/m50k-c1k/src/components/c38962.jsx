import React from 'react';
const LABEL_38962 = 'component_38962';
export function Component38962({ value = 38962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38962, 'data-value': derived.doubled }, children);
}
export default Component38962;

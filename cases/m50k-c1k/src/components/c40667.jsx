import React from 'react';
const LABEL_40667 = 'component_40667';
export function Component40667({ value = 40667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40667, 'data-value': derived.doubled }, children);
}
export default Component40667;

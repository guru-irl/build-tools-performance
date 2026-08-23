import React from 'react';
const LABEL_1667 = 'component_1667';
export function Component1667({ value = 1667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1667, 'data-value': derived.doubled }, children);
}
export default Component1667;

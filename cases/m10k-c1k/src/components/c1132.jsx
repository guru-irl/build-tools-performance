import React from 'react';
const LABEL_1132 = 'component_1132';
export function Component1132({ value = 1132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1132, 'data-value': derived.doubled }, children);
}
export default Component1132;

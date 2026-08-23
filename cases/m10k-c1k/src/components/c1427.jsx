import React from 'react';
const LABEL_1427 = 'component_1427';
export function Component1427({ value = 1427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1427, 'data-value': derived.doubled }, children);
}
export default Component1427;

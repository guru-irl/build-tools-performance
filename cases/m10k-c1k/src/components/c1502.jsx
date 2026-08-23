import React from 'react';
const LABEL_1502 = 'component_1502';
export function Component1502({ value = 1502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1502, 'data-value': derived.doubled }, children);
}
export default Component1502;

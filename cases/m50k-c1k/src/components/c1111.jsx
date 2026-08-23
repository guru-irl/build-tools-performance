import React from 'react';
const LABEL_1111 = 'component_1111';
export function Component1111({ value = 1111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1111, 'data-value': derived.doubled }, children);
}
export default Component1111;

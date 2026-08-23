import React from 'react';
const LABEL_11111 = 'component_11111';
export function Component11111({ value = 11111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11111, 'data-value': derived.doubled }, children);
}
export default Component11111;

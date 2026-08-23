import React from 'react';
const LABEL_1341 = 'component_1341';
export function Component1341({ value = 1341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1341, 'data-value': derived.doubled }, children);
}
export default Component1341;

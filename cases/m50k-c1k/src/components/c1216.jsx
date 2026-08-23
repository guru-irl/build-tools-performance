import React from 'react';
const LABEL_1216 = 'component_1216';
export function Component1216({ value = 1216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1216, 'data-value': derived.doubled }, children);
}
export default Component1216;

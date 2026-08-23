import React from 'react';
const LABEL_1432 = 'component_1432';
export function Component1432({ value = 1432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1432, 'data-value': derived.doubled }, children);
}
export default Component1432;

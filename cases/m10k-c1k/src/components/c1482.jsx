import React from 'react';
const LABEL_1482 = 'component_1482';
export function Component1482({ value = 1482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1482, 'data-value': derived.doubled }, children);
}
export default Component1482;

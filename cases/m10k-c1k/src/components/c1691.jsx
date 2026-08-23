import React from 'react';
const LABEL_1691 = 'component_1691';
export function Component1691({ value = 1691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1691, 'data-value': derived.doubled }, children);
}
export default Component1691;

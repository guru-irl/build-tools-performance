import React from 'react';
const LABEL_11691 = 'component_11691';
export function Component11691({ value = 11691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11691, 'data-value': derived.doubled }, children);
}
export default Component11691;

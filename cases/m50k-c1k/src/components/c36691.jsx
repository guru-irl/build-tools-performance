import React from 'react';
const LABEL_36691 = 'component_36691';
export function Component36691({ value = 36691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36691, 'data-value': derived.doubled }, children);
}
export default Component36691;

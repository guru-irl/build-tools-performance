import React from 'react';
const LABEL_691 = 'component_691';
export function Component691({ value = 691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_691, 'data-value': derived.doubled }, children);
}
export default Component691;

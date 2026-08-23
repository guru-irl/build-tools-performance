import React from 'react';
const LABEL_5691 = 'component_5691';
export function Component5691({ value = 5691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5691, 'data-value': derived.doubled }, children);
}
export default Component5691;

import React from 'react';
const LABEL_10691 = 'component_10691';
export function Component10691({ value = 10691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10691, 'data-value': derived.doubled }, children);
}
export default Component10691;

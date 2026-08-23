import React from 'react';
const LABEL_6691 = 'component_6691';
export function Component6691({ value = 6691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6691, 'data-value': derived.doubled }, children);
}
export default Component6691;

import React from 'react';
const LABEL_7691 = 'component_7691';
export function Component7691({ value = 7691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7691, 'data-value': derived.doubled }, children);
}
export default Component7691;

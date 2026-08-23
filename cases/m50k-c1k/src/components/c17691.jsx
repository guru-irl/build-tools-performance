import React from 'react';
const LABEL_17691 = 'component_17691';
export function Component17691({ value = 17691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17691, 'data-value': derived.doubled }, children);
}
export default Component17691;

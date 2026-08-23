import React from 'react';
const LABEL_28483 = 'component_28483';
export function Component28483({ value = 28483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28483, 'data-value': derived.doubled }, children);
}
export default Component28483;

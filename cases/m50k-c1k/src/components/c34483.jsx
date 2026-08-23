import React from 'react';
const LABEL_34483 = 'component_34483';
export function Component34483({ value = 34483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34483, 'data-value': derived.doubled }, children);
}
export default Component34483;

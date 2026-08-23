import React from 'react';
const LABEL_45483 = 'component_45483';
export function Component45483({ value = 45483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45483, 'data-value': derived.doubled }, children);
}
export default Component45483;

import React from 'react';
const LABEL_45807 = 'component_45807';
export function Component45807({ value = 45807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45807, 'data-value': derived.doubled }, children);
}
export default Component45807;

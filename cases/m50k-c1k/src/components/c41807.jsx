import React from 'react';
const LABEL_41807 = 'component_41807';
export function Component41807({ value = 41807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41807, 'data-value': derived.doubled }, children);
}
export default Component41807;

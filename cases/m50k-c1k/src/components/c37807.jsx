import React from 'react';
const LABEL_37807 = 'component_37807';
export function Component37807({ value = 37807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37807, 'data-value': derived.doubled }, children);
}
export default Component37807;

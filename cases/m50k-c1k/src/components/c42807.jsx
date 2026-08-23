import React from 'react';
const LABEL_42807 = 'component_42807';
export function Component42807({ value = 42807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42807, 'data-value': derived.doubled }, children);
}
export default Component42807;

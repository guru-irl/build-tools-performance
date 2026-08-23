import React from 'react';
const LABEL_10807 = 'component_10807';
export function Component10807({ value = 10807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10807, 'data-value': derived.doubled }, children);
}
export default Component10807;

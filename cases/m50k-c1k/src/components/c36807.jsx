import React from 'react';
const LABEL_36807 = 'component_36807';
export function Component36807({ value = 36807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36807, 'data-value': derived.doubled }, children);
}
export default Component36807;

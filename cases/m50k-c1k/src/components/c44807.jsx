import React from 'react';
const LABEL_44807 = 'component_44807';
export function Component44807({ value = 44807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44807, 'data-value': derived.doubled }, children);
}
export default Component44807;

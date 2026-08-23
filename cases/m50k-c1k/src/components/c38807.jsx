import React from 'react';
const LABEL_38807 = 'component_38807';
export function Component38807({ value = 38807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38807, 'data-value': derived.doubled }, children);
}
export default Component38807;

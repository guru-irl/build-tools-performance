import React from 'react';
const LABEL_38727 = 'component_38727';
export function Component38727({ value = 38727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38727, 'data-value': derived.doubled }, children);
}
export default Component38727;

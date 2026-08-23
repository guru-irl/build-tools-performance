import React from 'react';
const LABEL_38850 = 'component_38850';
export function Component38850({ value = 38850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38850, 'data-value': derived.doubled }, children);
}
export default Component38850;

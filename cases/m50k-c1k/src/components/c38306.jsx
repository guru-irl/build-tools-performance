import React from 'react';
const LABEL_38306 = 'component_38306';
export function Component38306({ value = 38306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38306, 'data-value': derived.doubled }, children);
}
export default Component38306;

import React from 'react';
const LABEL_38705 = 'component_38705';
export function Component38705({ value = 38705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38705, 'data-value': derived.doubled }, children);
}
export default Component38705;

import React from 'react';
const LABEL_38162 = 'component_38162';
export function Component38162({ value = 38162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38162, 'data-value': derived.doubled }, children);
}
export default Component38162;

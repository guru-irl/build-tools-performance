import React from 'react';
const LABEL_38515 = 'component_38515';
export function Component38515({ value = 38515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38515, 'data-value': derived.doubled }, children);
}
export default Component38515;

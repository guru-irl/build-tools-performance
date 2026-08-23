import React from 'react';
const LABEL_38229 = 'component_38229';
export function Component38229({ value = 38229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38229, 'data-value': derived.doubled }, children);
}
export default Component38229;

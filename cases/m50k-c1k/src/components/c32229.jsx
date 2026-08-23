import React from 'react';
const LABEL_32229 = 'component_32229';
export function Component32229({ value = 32229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32229, 'data-value': derived.doubled }, children);
}
export default Component32229;

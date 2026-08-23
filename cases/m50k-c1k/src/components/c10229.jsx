import React from 'react';
const LABEL_10229 = 'component_10229';
export function Component10229({ value = 10229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10229, 'data-value': derived.doubled }, children);
}
export default Component10229;

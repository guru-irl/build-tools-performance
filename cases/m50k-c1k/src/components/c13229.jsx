import React from 'react';
const LABEL_13229 = 'component_13229';
export function Component13229({ value = 13229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13229, 'data-value': derived.doubled }, children);
}
export default Component13229;

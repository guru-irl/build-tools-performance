import React from 'react';
const LABEL_26043 = 'component_26043';
export function Component26043({ value = 26043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26043, 'data-value': derived.doubled }, children);
}
export default Component26043;

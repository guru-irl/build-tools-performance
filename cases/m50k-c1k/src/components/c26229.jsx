import React from 'react';
const LABEL_26229 = 'component_26229';
export function Component26229({ value = 26229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26229, 'data-value': derived.doubled }, children);
}
export default Component26229;

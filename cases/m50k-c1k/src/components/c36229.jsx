import React from 'react';
const LABEL_36229 = 'component_36229';
export function Component36229({ value = 36229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36229, 'data-value': derived.doubled }, children);
}
export default Component36229;

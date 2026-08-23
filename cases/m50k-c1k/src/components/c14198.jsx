import React from 'react';
const LABEL_14198 = 'component_14198';
export function Component14198({ value = 14198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14198, 'data-value': derived.doubled }, children);
}
export default Component14198;

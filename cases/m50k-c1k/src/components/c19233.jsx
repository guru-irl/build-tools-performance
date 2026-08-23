import React from 'react';
const LABEL_19233 = 'component_19233';
export function Component19233({ value = 19233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19233, 'data-value': derived.doubled }, children);
}
export default Component19233;

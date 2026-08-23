import React from 'react';
const LABEL_38201 = 'component_38201';
export function Component38201({ value = 38201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38201, 'data-value': derived.doubled }, children);
}
export default Component38201;

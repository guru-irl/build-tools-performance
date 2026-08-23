import React from 'react';
const LABEL_33201 = 'component_33201';
export function Component33201({ value = 33201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33201, 'data-value': derived.doubled }, children);
}
export default Component33201;

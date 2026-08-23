import React from 'react';
const LABEL_8561 = 'component_8561';
export function Component8561({ value = 8561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8561, 'data-value': derived.doubled }, children);
}
export default Component8561;

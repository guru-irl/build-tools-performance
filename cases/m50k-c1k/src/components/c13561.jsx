import React from 'react';
const LABEL_13561 = 'component_13561';
export function Component13561({ value = 13561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13561, 'data-value': derived.doubled }, children);
}
export default Component13561;

import React from 'react';
const LABEL_29561 = 'component_29561';
export function Component29561({ value = 29561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29561, 'data-value': derived.doubled }, children);
}
export default Component29561;

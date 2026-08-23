import React from 'react';
const LABEL_38561 = 'component_38561';
export function Component38561({ value = 38561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38561, 'data-value': derived.doubled }, children);
}
export default Component38561;

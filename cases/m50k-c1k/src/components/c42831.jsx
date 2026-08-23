import React from 'react';
const LABEL_42831 = 'component_42831';
export function Component42831({ value = 42831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42831, 'data-value': derived.doubled }, children);
}
export default Component42831;

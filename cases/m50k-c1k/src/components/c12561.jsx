import React from 'react';
const LABEL_12561 = 'component_12561';
export function Component12561({ value = 12561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12561, 'data-value': derived.doubled }, children);
}
export default Component12561;

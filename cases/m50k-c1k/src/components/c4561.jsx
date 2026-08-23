import React from 'react';
const LABEL_4561 = 'component_4561';
export function Component4561({ value = 4561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4561, 'data-value': derived.doubled }, children);
}
export default Component4561;

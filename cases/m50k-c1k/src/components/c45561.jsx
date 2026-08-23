import React from 'react';
const LABEL_45561 = 'component_45561';
export function Component45561({ value = 45561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45561, 'data-value': derived.doubled }, children);
}
export default Component45561;

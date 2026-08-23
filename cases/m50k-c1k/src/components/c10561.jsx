import React from 'react';
const LABEL_10561 = 'component_10561';
export function Component10561({ value = 10561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10561, 'data-value': derived.doubled }, children);
}
export default Component10561;

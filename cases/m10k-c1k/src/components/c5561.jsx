import React from 'react';
const LABEL_5561 = 'component_5561';
export function Component5561({ value = 5561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5561, 'data-value': derived.doubled }, children);
}
export default Component5561;

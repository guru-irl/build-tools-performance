import React from 'react';
const LABEL_31561 = 'component_31561';
export function Component31561({ value = 31561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31561, 'data-value': derived.doubled }, children);
}
export default Component31561;

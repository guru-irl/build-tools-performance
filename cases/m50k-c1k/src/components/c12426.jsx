import React from 'react';
const LABEL_12426 = 'component_12426';
export function Component12426({ value = 12426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12426, 'data-value': derived.doubled }, children);
}
export default Component12426;

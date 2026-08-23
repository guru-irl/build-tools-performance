import React from 'react';
const LABEL_18804 = 'component_18804';
export function Component18804({ value = 18804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18804, 'data-value': derived.doubled }, children);
}
export default Component18804;

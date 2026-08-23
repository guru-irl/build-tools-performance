import React from 'react';
const LABEL_31174 = 'component_31174';
export function Component31174({ value = 31174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31174, 'data-value': derived.doubled }, children);
}
export default Component31174;

import React from 'react';
const LABEL_27702 = 'component_27702';
export function Component27702({ value = 27702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27702, 'data-value': derived.doubled }, children);
}
export default Component27702;

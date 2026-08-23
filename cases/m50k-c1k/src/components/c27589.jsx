import React from 'react';
const LABEL_27589 = 'component_27589';
export function Component27589({ value = 27589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27589, 'data-value': derived.doubled }, children);
}
export default Component27589;

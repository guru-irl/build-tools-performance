import React from 'react';
const LABEL_22602 = 'component_22602';
export function Component22602({ value = 22602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22602, 'data-value': derived.doubled }, children);
}
export default Component22602;

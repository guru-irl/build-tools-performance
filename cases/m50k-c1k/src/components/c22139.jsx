import React from 'react';
const LABEL_22139 = 'component_22139';
export function Component22139({ value = 22139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22139, 'data-value': derived.doubled }, children);
}
export default Component22139;

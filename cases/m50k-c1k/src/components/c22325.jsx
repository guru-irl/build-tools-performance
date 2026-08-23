import React from 'react';
const LABEL_22325 = 'component_22325';
export function Component22325({ value = 22325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22325, 'data-value': derived.doubled }, children);
}
export default Component22325;

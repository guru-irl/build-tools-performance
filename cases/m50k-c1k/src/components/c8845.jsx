import React from 'react';
const LABEL_8845 = 'component_8845';
export function Component8845({ value = 8845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8845, 'data-value': derived.doubled }, children);
}
export default Component8845;

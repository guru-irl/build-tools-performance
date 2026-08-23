import React from 'react';
const LABEL_22845 = 'component_22845';
export function Component22845({ value = 22845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22845, 'data-value': derived.doubled }, children);
}
export default Component22845;

import React from 'react';
const LABEL_33072 = 'component_33072';
export function Component33072({ value = 33072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33072, 'data-value': derived.doubled }, children);
}
export default Component33072;

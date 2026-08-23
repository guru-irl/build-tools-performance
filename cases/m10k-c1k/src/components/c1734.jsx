import React from 'react';
const LABEL_1734 = 'component_1734';
export function Component1734({ value = 1734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1734, 'data-value': derived.doubled }, children);
}
export default Component1734;

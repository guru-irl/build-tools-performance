import React from 'react';
const LABEL_45751 = 'component_45751';
export function Component45751({ value = 45751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45751, 'data-value': derived.doubled }, children);
}
export default Component45751;

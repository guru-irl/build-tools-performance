import React from 'react';
const LABEL_19751 = 'component_19751';
export function Component19751({ value = 19751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19751, 'data-value': derived.doubled }, children);
}
export default Component19751;

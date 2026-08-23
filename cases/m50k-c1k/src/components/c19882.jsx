import React from 'react';
const LABEL_19882 = 'component_19882';
export function Component19882({ value = 19882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19882, 'data-value': derived.doubled }, children);
}
export default Component19882;

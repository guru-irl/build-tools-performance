import React from 'react';
const LABEL_19732 = 'component_19732';
export function Component19732({ value = 19732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19732, 'data-value': derived.doubled }, children);
}
export default Component19732;

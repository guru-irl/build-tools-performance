import React from 'react';
const LABEL_21618 = 'component_21618';
export function Component21618({ value = 21618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21618, 'data-value': derived.doubled }, children);
}
export default Component21618;

import React from 'react';
const LABEL_22618 = 'component_22618';
export function Component22618({ value = 22618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22618, 'data-value': derived.doubled }, children);
}
export default Component22618;

import React from 'react';
const LABEL_41526 = 'component_41526';
export function Component41526({ value = 41526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41526, 'data-value': derived.doubled }, children);
}
export default Component41526;

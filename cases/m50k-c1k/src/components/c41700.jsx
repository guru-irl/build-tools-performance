import React from 'react';
const LABEL_41700 = 'component_41700';
export function Component41700({ value = 41700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41700, 'data-value': derived.doubled }, children);
}
export default Component41700;

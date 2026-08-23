import React from 'react';
const LABEL_41609 = 'component_41609';
export function Component41609({ value = 41609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41609, 'data-value': derived.doubled }, children);
}
export default Component41609;

import React from 'react';
const LABEL_41594 = 'component_41594';
export function Component41594({ value = 41594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41594, 'data-value': derived.doubled }, children);
}
export default Component41594;

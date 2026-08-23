import React from 'react';
const LABEL_23449 = 'component_23449';
export function Component23449({ value = 23449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23449, 'data-value': derived.doubled }, children);
}
export default Component23449;

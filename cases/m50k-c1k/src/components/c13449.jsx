import React from 'react';
const LABEL_13449 = 'component_13449';
export function Component13449({ value = 13449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13449, 'data-value': derived.doubled }, children);
}
export default Component13449;

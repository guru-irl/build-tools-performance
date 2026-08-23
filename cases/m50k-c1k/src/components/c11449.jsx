import React from 'react';
const LABEL_11449 = 'component_11449';
export function Component11449({ value = 11449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11449, 'data-value': derived.doubled }, children);
}
export default Component11449;

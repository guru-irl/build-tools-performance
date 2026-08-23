import React from 'react';
const LABEL_3417 = 'component_3417';
export function Component3417({ value = 3417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3417, 'data-value': derived.doubled }, children);
}
export default Component3417;

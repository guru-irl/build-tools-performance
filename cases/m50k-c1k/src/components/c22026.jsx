import React from 'react';
const LABEL_22026 = 'component_22026';
export function Component22026({ value = 22026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22026, 'data-value': derived.doubled }, children);
}
export default Component22026;

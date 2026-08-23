import React from 'react';
const LABEL_3026 = 'component_3026';
export function Component3026({ value = 3026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3026, 'data-value': derived.doubled }, children);
}
export default Component3026;

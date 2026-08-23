import React from 'react';
const LABEL_11533 = 'component_11533';
export function Component11533({ value = 11533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11533, 'data-value': derived.doubled }, children);
}
export default Component11533;

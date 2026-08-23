import React from 'react';
const LABEL_34533 = 'component_34533';
export function Component34533({ value = 34533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34533, 'data-value': derived.doubled }, children);
}
export default Component34533;

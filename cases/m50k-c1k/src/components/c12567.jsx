import React from 'react';
const LABEL_12567 = 'component_12567';
export function Component12567({ value = 12567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12567, 'data-value': derived.doubled }, children);
}
export default Component12567;

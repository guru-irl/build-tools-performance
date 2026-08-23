import React from 'react';
const LABEL_34936 = 'component_34936';
export function Component34936({ value = 34936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34936, 'data-value': derived.doubled }, children);
}
export default Component34936;

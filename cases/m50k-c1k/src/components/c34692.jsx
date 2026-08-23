import React from 'react';
const LABEL_34692 = 'component_34692';
export function Component34692({ value = 34692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34692, 'data-value': derived.doubled }, children);
}
export default Component34692;

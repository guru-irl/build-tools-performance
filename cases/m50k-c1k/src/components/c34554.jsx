import React from 'react';
const LABEL_34554 = 'component_34554';
export function Component34554({ value = 34554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34554, 'data-value': derived.doubled }, children);
}
export default Component34554;

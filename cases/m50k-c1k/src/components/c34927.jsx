import React from 'react';
const LABEL_34927 = 'component_34927';
export function Component34927({ value = 34927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34927, 'data-value': derived.doubled }, children);
}
export default Component34927;

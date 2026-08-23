import React from 'react';
const LABEL_34885 = 'component_34885';
export function Component34885({ value = 34885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34885, 'data-value': derived.doubled }, children);
}
export default Component34885;

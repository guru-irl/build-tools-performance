import React from 'react';
const LABEL_34472 = 'component_34472';
export function Component34472({ value = 34472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34472, 'data-value': derived.doubled }, children);
}
export default Component34472;

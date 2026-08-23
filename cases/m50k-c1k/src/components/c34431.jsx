import React from 'react';
const LABEL_34431 = 'component_34431';
export function Component34431({ value = 34431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34431, 'data-value': derived.doubled }, children);
}
export default Component34431;

import React from 'react';
const LABEL_34131 = 'component_34131';
export function Component34131({ value = 34131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34131, 'data-value': derived.doubled }, children);
}
export default Component34131;

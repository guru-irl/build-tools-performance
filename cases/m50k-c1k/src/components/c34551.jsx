import React from 'react';
const LABEL_34551 = 'component_34551';
export function Component34551({ value = 34551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34551, 'data-value': derived.doubled }, children);
}
export default Component34551;

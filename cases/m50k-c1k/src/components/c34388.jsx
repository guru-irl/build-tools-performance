import React from 'react';
const LABEL_34388 = 'component_34388';
export function Component34388({ value = 34388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34388, 'data-value': derived.doubled }, children);
}
export default Component34388;

import React from 'react';
const LABEL_34445 = 'component_34445';
export function Component34445({ value = 34445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34445, 'data-value': derived.doubled }, children);
}
export default Component34445;

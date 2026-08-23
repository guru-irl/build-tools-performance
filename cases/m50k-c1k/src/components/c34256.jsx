import React from 'react';
const LABEL_34256 = 'component_34256';
export function Component34256({ value = 34256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34256, 'data-value': derived.doubled }, children);
}
export default Component34256;

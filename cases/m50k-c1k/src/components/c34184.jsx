import React from 'react';
const LABEL_34184 = 'component_34184';
export function Component34184({ value = 34184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34184, 'data-value': derived.doubled }, children);
}
export default Component34184;

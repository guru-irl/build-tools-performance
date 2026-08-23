import React from 'react';
const LABEL_34146 = 'component_34146';
export function Component34146({ value = 34146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34146, 'data-value': derived.doubled }, children);
}
export default Component34146;

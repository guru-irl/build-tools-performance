import React from 'react';
const LABEL_34172 = 'component_34172';
export function Component34172({ value = 34172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34172, 'data-value': derived.doubled }, children);
}
export default Component34172;

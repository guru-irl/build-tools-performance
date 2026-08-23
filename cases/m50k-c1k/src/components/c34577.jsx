import React from 'react';
const LABEL_34577 = 'component_34577';
export function Component34577({ value = 34577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34577, 'data-value': derived.doubled }, children);
}
export default Component34577;

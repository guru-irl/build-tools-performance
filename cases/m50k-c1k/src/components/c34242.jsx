import React from 'react';
const LABEL_34242 = 'component_34242';
export function Component34242({ value = 34242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34242, 'data-value': derived.doubled }, children);
}
export default Component34242;

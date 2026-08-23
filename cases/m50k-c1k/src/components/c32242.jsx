import React from 'react';
const LABEL_32242 = 'component_32242';
export function Component32242({ value = 32242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32242, 'data-value': derived.doubled }, children);
}
export default Component32242;

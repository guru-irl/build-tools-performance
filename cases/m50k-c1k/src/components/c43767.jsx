import React from 'react';
const LABEL_43767 = 'component_43767';
export function Component43767({ value = 43767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43767, 'data-value': derived.doubled }, children);
}
export default Component43767;

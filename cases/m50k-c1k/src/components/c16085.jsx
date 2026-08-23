import React from 'react';
const LABEL_16085 = 'component_16085';
export function Component16085({ value = 16085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16085, 'data-value': derived.doubled }, children);
}
export default Component16085;

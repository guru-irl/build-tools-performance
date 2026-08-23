import React from 'react';
const LABEL_34450 = 'component_34450';
export function Component34450({ value = 34450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34450, 'data-value': derived.doubled }, children);
}
export default Component34450;

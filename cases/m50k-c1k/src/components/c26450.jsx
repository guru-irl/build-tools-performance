import React from 'react';
const LABEL_26450 = 'component_26450';
export function Component26450({ value = 26450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26450, 'data-value': derived.doubled }, children);
}
export default Component26450;

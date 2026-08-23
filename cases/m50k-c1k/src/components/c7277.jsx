import React from 'react';
const LABEL_7277 = 'component_7277';
export function Component7277({ value = 7277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7277, 'data-value': derived.doubled }, children);
}
export default Component7277;

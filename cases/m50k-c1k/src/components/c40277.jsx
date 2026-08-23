import React from 'react';
const LABEL_40277 = 'component_40277';
export function Component40277({ value = 40277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40277, 'data-value': derived.doubled }, children);
}
export default Component40277;

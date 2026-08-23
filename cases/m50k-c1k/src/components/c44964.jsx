import React from 'react';
const LABEL_44964 = 'component_44964';
export function Component44964({ value = 44964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44964, 'data-value': derived.doubled }, children);
}
export default Component44964;

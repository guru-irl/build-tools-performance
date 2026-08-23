import React from 'react';
const LABEL_254 = 'component_254';
export function Component254({ value = 254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_254, 'data-value': derived.doubled }, children);
}
export default Component254;

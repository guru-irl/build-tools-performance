import React from 'react';
const LABEL_10106 = 'component_10106';
export function Component10106({ value = 10106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10106, 'data-value': derived.doubled }, children);
}
export default Component10106;

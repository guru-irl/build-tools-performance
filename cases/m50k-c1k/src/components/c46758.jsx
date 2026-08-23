import React from 'react';
const LABEL_46758 = 'component_46758';
export function Component46758({ value = 46758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46758, 'data-value': derived.doubled }, children);
}
export default Component46758;

import React from 'react';
const LABEL_21212 = 'component_21212';
export function Component21212({ value = 21212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21212, 'data-value': derived.doubled }, children);
}
export default Component21212;

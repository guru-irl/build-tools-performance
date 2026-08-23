import React from 'react';
const LABEL_46272 = 'component_46272';
export function Component46272({ value = 46272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46272, 'data-value': derived.doubled }, children);
}
export default Component46272;

import React from 'react';
const LABEL_10234 = 'component_10234';
export function Component10234({ value = 10234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10234, 'data-value': derived.doubled }, children);
}
export default Component10234;

import React from 'react';
const LABEL_10020 = 'component_10020';
export function Component10020({ value = 10020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10020, 'data-value': derived.doubled }, children);
}
export default Component10020;

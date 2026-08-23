import React from 'react';
const LABEL_25438 = 'component_25438';
export function Component25438({ value = 25438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25438, 'data-value': derived.doubled }, children);
}
export default Component25438;

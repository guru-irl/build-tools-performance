import React from 'react';
const LABEL_46252 = 'component_46252';
export function Component46252({ value = 46252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46252, 'data-value': derived.doubled }, children);
}
export default Component46252;

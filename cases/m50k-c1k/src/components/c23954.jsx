import React from 'react';
const LABEL_23954 = 'component_23954';
export function Component23954({ value = 23954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23954, 'data-value': derived.doubled }, children);
}
export default Component23954;

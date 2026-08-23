import React from 'react';
const LABEL_23257 = 'component_23257';
export function Component23257({ value = 23257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23257, 'data-value': derived.doubled }, children);
}
export default Component23257;

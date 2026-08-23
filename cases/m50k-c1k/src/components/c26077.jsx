import React from 'react';
const LABEL_26077 = 'component_26077';
export function Component26077({ value = 26077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26077, 'data-value': derived.doubled }, children);
}
export default Component26077;

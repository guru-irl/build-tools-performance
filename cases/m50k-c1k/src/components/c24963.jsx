import React from 'react';
const LABEL_24963 = 'component_24963';
export function Component24963({ value = 24963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24963, 'data-value': derived.doubled }, children);
}
export default Component24963;

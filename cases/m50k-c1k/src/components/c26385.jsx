import React from 'react';
const LABEL_26385 = 'component_26385';
export function Component26385({ value = 26385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26385, 'data-value': derived.doubled }, children);
}
export default Component26385;

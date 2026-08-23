import React from 'react';
const LABEL_24203 = 'component_24203';
export function Component24203({ value = 24203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24203, 'data-value': derived.doubled }, children);
}
export default Component24203;

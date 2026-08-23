import React from 'react';
const LABEL_46409 = 'component_46409';
export function Component46409({ value = 46409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46409, 'data-value': derived.doubled }, children);
}
export default Component46409;

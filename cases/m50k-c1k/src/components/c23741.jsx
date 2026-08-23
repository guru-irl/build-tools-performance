import React from 'react';
const LABEL_23741 = 'component_23741';
export function Component23741({ value = 23741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23741, 'data-value': derived.doubled }, children);
}
export default Component23741;

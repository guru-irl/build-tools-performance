import React from 'react';
const LABEL_32741 = 'component_32741';
export function Component32741({ value = 32741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32741, 'data-value': derived.doubled }, children);
}
export default Component32741;

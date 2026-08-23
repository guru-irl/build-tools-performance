import React from 'react';
const LABEL_10741 = 'component_10741';
export function Component10741({ value = 10741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10741, 'data-value': derived.doubled }, children);
}
export default Component10741;

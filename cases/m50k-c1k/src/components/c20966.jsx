import React from 'react';
const LABEL_20966 = 'component_20966';
export function Component20966({ value = 20966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20966, 'data-value': derived.doubled }, children);
}
export default Component20966;

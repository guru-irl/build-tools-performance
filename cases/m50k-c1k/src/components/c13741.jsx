import React from 'react';
const LABEL_13741 = 'component_13741';
export function Component13741({ value = 13741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13741, 'data-value': derived.doubled }, children);
}
export default Component13741;

import React from 'react';
const LABEL_33741 = 'component_33741';
export function Component33741({ value = 33741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33741, 'data-value': derived.doubled }, children);
}
export default Component33741;

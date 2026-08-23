import React from 'react';
const LABEL_11741 = 'component_11741';
export function Component11741({ value = 11741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11741, 'data-value': derived.doubled }, children);
}
export default Component11741;

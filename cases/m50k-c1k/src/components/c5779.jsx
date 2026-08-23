import React from 'react';
const LABEL_5779 = 'component_5779';
export function Component5779({ value = 5779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5779, 'data-value': derived.doubled }, children);
}
export default Component5779;

import React from 'react';
const LABEL_35651 = 'component_35651';
export function Component35651({ value = 35651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35651, 'data-value': derived.doubled }, children);
}
export default Component35651;

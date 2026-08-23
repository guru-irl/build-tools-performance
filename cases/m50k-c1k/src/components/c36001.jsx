import React from 'react';
const LABEL_36001 = 'component_36001';
export function Component36001({ value = 36001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36001, 'data-value': derived.doubled }, children);
}
export default Component36001;

import React from 'react';
const LABEL_39001 = 'component_39001';
export function Component39001({ value = 39001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39001, 'data-value': derived.doubled }, children);
}
export default Component39001;

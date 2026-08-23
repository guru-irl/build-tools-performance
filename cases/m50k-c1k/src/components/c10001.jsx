import React from 'react';
const LABEL_10001 = 'component_10001';
export function Component10001({ value = 10001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10001, 'data-value': derived.doubled }, children);
}
export default Component10001;

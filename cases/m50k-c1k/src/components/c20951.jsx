import React from 'react';
const LABEL_20951 = 'component_20951';
export function Component20951({ value = 20951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20951, 'data-value': derived.doubled }, children);
}
export default Component20951;

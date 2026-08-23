import React from 'react';
const LABEL_10268 = 'component_10268';
export function Component10268({ value = 10268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10268, 'data-value': derived.doubled }, children);
}
export default Component10268;

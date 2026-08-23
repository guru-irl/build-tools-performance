import React from 'react';
const LABEL_10105 = 'component_10105';
export function Component10105({ value = 10105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10105, 'data-value': derived.doubled }, children);
}
export default Component10105;

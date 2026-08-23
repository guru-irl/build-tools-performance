import React from 'react';
const LABEL_20619 = 'component_20619';
export function Component20619({ value = 20619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20619, 'data-value': derived.doubled }, children);
}
export default Component20619;

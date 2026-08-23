import React from 'react';
const LABEL_10351 = 'component_10351';
export function Component10351({ value = 10351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10351, 'data-value': derived.doubled }, children);
}
export default Component10351;

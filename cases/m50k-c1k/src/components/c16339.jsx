import React from 'react';
const LABEL_16339 = 'component_16339';
export function Component16339({ value = 16339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16339, 'data-value': derived.doubled }, children);
}
export default Component16339;

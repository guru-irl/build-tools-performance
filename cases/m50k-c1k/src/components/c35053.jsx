import React from 'react';
const LABEL_35053 = 'component_35053';
export function Component35053({ value = 35053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35053, 'data-value': derived.doubled }, children);
}
export default Component35053;

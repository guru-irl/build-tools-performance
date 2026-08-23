import React from 'react';
const LABEL_45348 = 'component_45348';
export function Component45348({ value = 45348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45348, 'data-value': derived.doubled }, children);
}
export default Component45348;

import React from 'react';
const LABEL_12718 = 'component_12718';
export function Component12718({ value = 12718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12718, 'data-value': derived.doubled }, children);
}
export default Component12718;

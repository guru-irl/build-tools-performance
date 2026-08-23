import React from 'react';
const LABEL_12725 = 'component_12725';
export function Component12725({ value = 12725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12725, 'data-value': derived.doubled }, children);
}
export default Component12725;

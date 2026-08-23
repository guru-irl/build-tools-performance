import React from 'react';
const LABEL_2074 = 'component_2074';
export function Component2074({ value = 2074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2074, 'data-value': derived.doubled }, children);
}
export default Component2074;

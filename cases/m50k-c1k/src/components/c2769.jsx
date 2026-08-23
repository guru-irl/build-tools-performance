import React from 'react';
const LABEL_2769 = 'component_2769';
export function Component2769({ value = 2769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2769, 'data-value': derived.doubled }, children);
}
export default Component2769;

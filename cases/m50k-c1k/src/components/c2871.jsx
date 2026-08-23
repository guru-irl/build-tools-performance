import React from 'react';
const LABEL_2871 = 'component_2871';
export function Component2871({ value = 2871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2871, 'data-value': derived.doubled }, children);
}
export default Component2871;

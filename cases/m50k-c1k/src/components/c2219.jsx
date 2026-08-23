import React from 'react';
const LABEL_2219 = 'component_2219';
export function Component2219({ value = 2219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2219, 'data-value': derived.doubled }, children);
}
export default Component2219;

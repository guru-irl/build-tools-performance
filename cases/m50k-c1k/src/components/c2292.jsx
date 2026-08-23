import React from 'react';
const LABEL_2292 = 'component_2292';
export function Component2292({ value = 2292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2292, 'data-value': derived.doubled }, children);
}
export default Component2292;

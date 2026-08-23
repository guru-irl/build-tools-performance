import React from 'react';
const LABEL_2364 = 'component_2364';
export function Component2364({ value = 2364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2364, 'data-value': derived.doubled }, children);
}
export default Component2364;

import React from 'react';
const LABEL_2579 = 'component_2579';
export function Component2579({ value = 2579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2579, 'data-value': derived.doubled }, children);
}
export default Component2579;

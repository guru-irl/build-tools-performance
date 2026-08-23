import React from 'react';
const LABEL_2744 = 'component_2744';
export function Component2744({ value = 2744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2744, 'data-value': derived.doubled }, children);
}
export default Component2744;

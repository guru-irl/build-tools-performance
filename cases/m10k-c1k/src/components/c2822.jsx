import React from 'react';
const LABEL_2822 = 'component_2822';
export function Component2822({ value = 2822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2822, 'data-value': derived.doubled }, children);
}
export default Component2822;

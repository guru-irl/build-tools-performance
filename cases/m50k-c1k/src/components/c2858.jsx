import React from 'react';
const LABEL_2858 = 'component_2858';
export function Component2858({ value = 2858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2858, 'data-value': derived.doubled }, children);
}
export default Component2858;

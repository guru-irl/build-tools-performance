import React from 'react';
const LABEL_2203 = 'component_2203';
export function Component2203({ value = 2203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2203, 'data-value': derived.doubled }, children);
}
export default Component2203;

import React from 'react';
const LABEL_23035 = 'component_23035';
export function Component23035({ value = 23035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23035, 'data-value': derived.doubled }, children);
}
export default Component23035;

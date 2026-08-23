import React from 'react';
const LABEL_23897 = 'component_23897';
export function Component23897({ value = 23897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23897, 'data-value': derived.doubled }, children);
}
export default Component23897;

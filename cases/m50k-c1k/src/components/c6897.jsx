import React from 'react';
const LABEL_6897 = 'component_6897';
export function Component6897({ value = 6897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6897, 'data-value': derived.doubled }, children);
}
export default Component6897;

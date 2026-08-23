import React from 'react';
const LABEL_32897 = 'component_32897';
export function Component32897({ value = 32897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32897, 'data-value': derived.doubled }, children);
}
export default Component32897;

import React from 'react';
const LABEL_18591 = 'component_18591';
export function Component18591({ value = 18591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18591, 'data-value': derived.doubled }, children);
}
export default Component18591;

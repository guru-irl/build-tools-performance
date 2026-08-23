import React from 'react';
const LABEL_37236 = 'component_37236';
export function Component37236({ value = 37236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37236, 'data-value': derived.doubled }, children);
}
export default Component37236;

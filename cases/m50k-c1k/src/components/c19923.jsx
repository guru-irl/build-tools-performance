import React from 'react';
const LABEL_19923 = 'component_19923';
export function Component19923({ value = 19923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19923, 'data-value': derived.doubled }, children);
}
export default Component19923;

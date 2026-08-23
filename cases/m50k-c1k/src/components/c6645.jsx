import React from 'react';
const LABEL_6645 = 'component_6645';
export function Component6645({ value = 6645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6645, 'data-value': derived.doubled }, children);
}
export default Component6645;

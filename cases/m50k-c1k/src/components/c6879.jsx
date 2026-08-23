import React from 'react';
const LABEL_6879 = 'component_6879';
export function Component6879({ value = 6879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6879, 'data-value': derived.doubled }, children);
}
export default Component6879;

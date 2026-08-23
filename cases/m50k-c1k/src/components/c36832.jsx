import React from 'react';
const LABEL_36832 = 'component_36832';
export function Component36832({ value = 36832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36832, 'data-value': derived.doubled }, children);
}
export default Component36832;

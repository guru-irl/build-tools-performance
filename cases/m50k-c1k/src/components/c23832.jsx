import React from 'react';
const LABEL_23832 = 'component_23832';
export function Component23832({ value = 23832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23832, 'data-value': derived.doubled }, children);
}
export default Component23832;

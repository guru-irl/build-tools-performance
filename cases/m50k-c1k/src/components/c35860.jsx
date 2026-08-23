import React from 'react';
const LABEL_35860 = 'component_35860';
export function Component35860({ value = 35860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35860, 'data-value': derived.doubled }, children);
}
export default Component35860;

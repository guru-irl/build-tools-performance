import React from 'react';
const LABEL_2999 = 'component_2999';
export function Component2999({ value = 2999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2999, 'data-value': derived.doubled }, children);
}
export default Component2999;

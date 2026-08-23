import React from 'react';
const LABEL_4211 = 'component_4211';
export function Component4211({ value = 4211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4211, 'data-value': derived.doubled }, children);
}
export default Component4211;

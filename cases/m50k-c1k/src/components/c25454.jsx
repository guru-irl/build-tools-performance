import React from 'react';
const LABEL_25454 = 'component_25454';
export function Component25454({ value = 25454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25454, 'data-value': derived.doubled }, children);
}
export default Component25454;

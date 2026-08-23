import React from 'react';
const LABEL_7454 = 'component_7454';
export function Component7454({ value = 7454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7454, 'data-value': derived.doubled }, children);
}
export default Component7454;

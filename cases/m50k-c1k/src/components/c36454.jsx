import React from 'react';
const LABEL_36454 = 'component_36454';
export function Component36454({ value = 36454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36454, 'data-value': derived.doubled }, children);
}
export default Component36454;

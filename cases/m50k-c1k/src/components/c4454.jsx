import React from 'react';
const LABEL_4454 = 'component_4454';
export function Component4454({ value = 4454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4454, 'data-value': derived.doubled }, children);
}
export default Component4454;

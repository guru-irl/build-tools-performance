import React from 'react';
const LABEL_8475 = 'component_8475';
export function Component8475({ value = 8475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8475, 'data-value': derived.doubled }, children);
}
export default Component8475;

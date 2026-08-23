import React from 'react';
const LABEL_476 = 'component_476';
export function Component476({ value = 476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_476, 'data-value': derived.doubled }, children);
}
export default Component476;

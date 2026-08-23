import React from 'react';
const LABEL_8127 = 'component_8127';
export function Component8127({ value = 8127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8127, 'data-value': derived.doubled }, children);
}
export default Component8127;

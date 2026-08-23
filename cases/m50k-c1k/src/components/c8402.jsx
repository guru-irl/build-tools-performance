import React from 'react';
const LABEL_8402 = 'component_8402';
export function Component8402({ value = 8402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8402, 'data-value': derived.doubled }, children);
}
export default Component8402;

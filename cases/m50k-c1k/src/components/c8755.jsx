import React from 'react';
const LABEL_8755 = 'component_8755';
export function Component8755({ value = 8755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8755, 'data-value': derived.doubled }, children);
}
export default Component8755;

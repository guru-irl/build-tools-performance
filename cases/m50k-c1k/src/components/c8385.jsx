import React from 'react';
const LABEL_8385 = 'component_8385';
export function Component8385({ value = 8385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8385, 'data-value': derived.doubled }, children);
}
export default Component8385;

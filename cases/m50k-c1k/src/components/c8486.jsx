import React from 'react';
const LABEL_8486 = 'component_8486';
export function Component8486({ value = 8486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8486, 'data-value': derived.doubled }, children);
}
export default Component8486;

import React from 'react';
const LABEL_8547 = 'component_8547';
export function Component8547({ value = 8547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8547, 'data-value': derived.doubled }, children);
}
export default Component8547;
